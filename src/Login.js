function Login() {
    return (<div className="container">
            <form>
                <div className="row d-flex justify-content-center align-items-center vh-100">     
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="p-2 fs-5 font-weight-bold" for="exampleInputEmail1">Email address :</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label className="p-2 fs-5 font-weight-bold" for="exampleInputPassword1">Password :</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                    
                        <div className="p-3 form-check">
                            <input type="checkbox" className="ps-2 form-check-input" id="exampleCheck1" />
                            <label className="form-check-label font-weight-bold fs-5" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
    </div>);
}
export default Login;