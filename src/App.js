import React, { useState } from "react";
import "./styles.css";
import { listeyeEkle, isaretle, temizle} from "./actions";

import { connect } from "react-redux";
const App = (props) => {
  const [text, SetText] = useState("");
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          placeholer="listeye ekle"
          value={text}
          onChange={(e) => SetText(e.target.value)}
        />
        <button
          onClick={() => {
            SetText("");
            props.listeyeEkle(text);
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {props.liste.map((item) => (
          <div
            onClick={() => props.isaretle(item.id)}
            key={item.id}
            className={item.tamamlandi ? "yapildi" : ""}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={()=>props.temizle()} className="temizle">Tamamlananları Temizle</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    liste: state.liste,
  };
};
export default connect(mapStateToProps, { listeyeEkle, isaretle, temizle})(App);
