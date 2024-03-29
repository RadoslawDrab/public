export default {
  boxSizing: "border-box",
  margin: "0",
  padding: "0",
  left: "max(350px, calc(18vw))",
  bottom: "max(20px, 3%)",
  transform: "translate(-50%, -50%)",
  ".container": {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontWeight: 900,
    letterSpacing: "5px",
    display: "grid",
    gridTemplateColumns: "auto auto",
    alignItems: "stretch",
    justifyContent: "center",
    columnGap: "50px",
  },
  ".container > *": {
    transition: "all 1s",
    userSelect: "none",
    cursor: "default",
  },
  ".container__time": {
    background: "linear-gradient(to left bottom, #D765A1, #A81AC8, #291375)",
    backgroundSize: "200%, 200%",
    backgroundClip: "text",
    clipPath: "inset(1px)",
    margin: "0",
    padding: "0",
    fontSize: "max(5vw, 80px)",
    letterSpacing: ".075em",
    color: "#ffffff00",
    gridRow: "span 2",
  },
  ".container__date": {
    color: "#D183A5",
    fontSize: "max(2.5vw, 40px)",
    opacity: "25%",
    letterSpacing: ".1em",
  },
  ".container__day": {
    gridColumn: "2",
    fontSize: "max(1.5vw, 20px)",
    color: "#D183A5",
    opacity: "25%",
    letterSpacing: ".125em",
  },
  ".container__time:hover, .container__date:hover, .container__day:hover": {
    transform: "scale(1.02)",
    filter: "brightness(1.4)",
  },
  ".container__time:hover": {
    animation: "1s backgroundMovement ease",
  },
  ".container__date:hover, .container__day:hover": {
    opacity: "75%",
  },
};
