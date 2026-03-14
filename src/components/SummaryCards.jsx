function SummaryCards({users}){

const totalUsers = users.length
const activeUsers = users.filter(u=>u.id < 5).length
const revenue = users.length * 120

return(

<div className="row g-3 mb-4">

<div className="col-md-3">
<div className="card-box">
<h4>Total Users</h4>
<p>{totalUsers}</p>
</div>
</div>

<div className="col-md-3">
<div className="card-box">
<h4>Active Tasks</h4>
<p>{activeUsers}</p>
</div>
</div>

<div className="col-md-3">
<div className="card-box">
<h4>Pending Revenue</h4>
<p>${revenue}</p>
</div>
</div>

<div className="col-md-3">
<div className="card-box">
<h4>Completed</h4>
<p>15</p>
</div>
</div>

</div>

)

}

export default SummaryCards