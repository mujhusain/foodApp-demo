import invert from 'invert-color';

export const COLORS = {
    TRANSPARENT: 'transparent',
    white: 'rgb(255,255,255)',
    black: 'rgb(0,0,0)',
    black10: 'rgb(10,10,10)',
    blue: 'rgb(0, 187, 242)',
    green: '#2A9D8E',
    darkGreen:'#264651',
    red: 'red',
    yellow: 'rgba(255, 212, 40, 1)',
    darkGray: 'rgba(105,105,105,0.9)',
    lightGray: '#a7b6b9',
    skipGray: 'rgb(91,91,92)',
    borderColor: 'rgb(240, 240, 240)',
    inactiveIndicator: 'rgb(228, 233, 242)',
    inputLabel: 'rgb(143,155,179)',
    inputIcon: 'rgb(197,206,224)',
    inputValue: 'rgb(46,58,89)',
    discountRed: 'rgb(199,5,28)',
    orange: 'rgb(255,157,43)',
    infoGray: '#EFFFFE',
    ReviewBlack: 'rgb(34,43,69)',
    blueGrey: 'rgb(143,155,179)',
    darkBlueGrey: 'rgb(46,58,89)',
    lightBlueGrey: 'rgb(197, 206, 224)'
  };



/* get colors */
export const colors = (idDark=false) => {
  const lightColors:any = {
    background: '#FFFFFF',
    primary: '#512DA8',
    text: '#121212',
    error: '#D32F2F',
    black: '#000',
    white: '#fff',
  }

  const darkColors:any = {}
  for (const colors in lightColors) {
    darkColors[colors] = invert(lightColors[colors]);
  }
  return idDark ? darkColors : lightColors;
}