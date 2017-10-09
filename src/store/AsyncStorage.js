export const saveState=(state) =>{
    try {
         AsyncStorage.setItem('state', state);
      } catch (error) {
        return undefined;
      }
}
export const loadState=()=>{
    try {
        const value =  AsyncStorage.getItem('state');
        console.log(AsyncStorage.getItem('state'));
        if (value !== null){
          // We have data!!
          return value;
        }
      } catch (error) {
        // Error retrieving data
      }
}