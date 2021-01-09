class Formatter {
  //add static methods here
  static capitalize(st){
    return st.charAt(0).toUpperCase()+st.slice(1,)
  }

  static sanitize(st){
    return st.replace(/[^A-Za-z0-9-'\s]+/g)
  }
}
