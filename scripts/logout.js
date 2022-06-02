function logout(){
    sessionStorage.removeItem("status")
    sessionStorage.removeItem("userid")
    sessionStorage.removeItem("favList")
    sessionStorage.removeItem("searchTerm")
}

logout()