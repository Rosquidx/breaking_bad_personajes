import React from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";
import "./breakingbad.css";
const Multipleshooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { loading, data } = useFetch(`characters/${counter}`);
  const { name, nickname, status, img } = !!data && data[0];

  console.log(!data);

  return (
    <div className="bg-clarito">
      <div>
        {loading ? (
          <div className="cargador-loading d-flex justify-content-center  align-items-center">
            <div className="spinner-grow text-light m-2" role="status"></div>
            <div className="spinner-grow text-light m-2" role="status"></div>
            <div className="spinner-grow text-light m-2" role="status"></div>
          </div>
        ) : (
          <div>
            <header className="center ">
              <img
                src={
                  "https://raw.githubusercontent.com/smilegupta/breaking-bad/master/src/img/logo.png"
                }
                alt=""
              />
            </header>

            <div className="contenedor">
              {/* <FrasesBreacking counter={counter} /> */}
              <div>
                <img src={img} alt="" className="img__card" />
                <p>
                  <strong>Nombre: </strong>
                  {name}
                </p>
                <p>
                  <strong>Estado: </strong>
                  {status}
                </p>
                <p>
                  <strong>Apodo: </strong>
                  {nickname}
                </p>
              </div>
            </div>
            {counter === 1 ? (
              <div
                onClick={increment}
                className="d-flex align-items-center align-self-center justify-content-center p-5 mr-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle-fill text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </div>
            ) : (
              <div className="d-flex lign-self-center justify-content-center p-5">
                <div onClick={decrement} className="m-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-arrow-left-circle-fill text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                  </svg>
                </div>

                <div onClick={increment} className="m-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-arrow-right-circle-fill text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
      <footer className="bg-light text-center">
            <div
              className="text-center p-3 bg-dark"
              
            >
              © 2021 Copyright | Andrés Felipe Marín Monsalve
            </div>
        </footer>
    </div>
  );
};

export default Multipleshooks;
