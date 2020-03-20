export const RECEIVE_CURRENT_LOCATION = 'RECEIVE_CURRENT_LOCATION'

export const receiveUserLocation = data => {
    return {
        type: RECEIVE_CURRENT_LOCATION,
        data
    } 
} 

export const getUserLocation = () => (dispatch) => {
  navigator.geolocation.getCurrentPosition((pos) => 
  dispatch(receiveUserLocation(pos)))
}


// getCurrentPosition() {
//   navigator.geolocation.getCurrentPosition(position => {
//     const userPos = [position.coords.latitude, position.coords.longitude]
//     receiveUserLocation(userPos)
//   })
// }