function SearchBar({setSearch}){

return(

<input
className="form-control mb-3"
placeholder="Search user..."
onChange={(e)=>setSearch(e.target.value)}
/>

)

}

export default SearchBar