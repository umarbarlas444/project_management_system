function App() {
    return (
        <>
            <div id="layout-wrapper">
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box">
                                <a href="index.html" className="logo logo-dark">
                                    <span className="logo-sm">
                                        <img src="images/logo-dark.png" alt="logo-sm-dark" height="22" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src="images/logo-light.png" alt="logo-dark" height="20" />
                                    </span>
                                </a>

                                <a href="index.html" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src="images/logo-dark.png" alt="logo-sm-light" height="22" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src="images/logo-light.png" alt="logo-light" height="20" />
                                    </span>
                                </a>
                            </div>

                            <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                                <i className="ri-menu-2-line align-middle"></i>
                            </button>
                        </div>

                        <div className="d-flex">
                            <div className="dropdown d-inline-block d-lg-none ms-2">
                                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ri-search-line"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                                    <form className="p-3">
                                        <div className="mb-3 m-0">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search ..." />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="submit">
                                                        <i className="ri-search-line"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="dropdown d-inline-block">
                                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="ri-notification-3-line"></i>
                                    <span className="noti-dot"></span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                                    <div className="p-3">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="m-0"> Notifications </h6>
                                            </div>
                                            <div className="col-auto">
                                                <a href="#!" className="small">
                                                    {" "}
                                                    View All
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-simplebar style={{maxHeight: "230px"}}>
                                        <a href="" className="text-reset notification-item">
                                            <div className="d-flex">
                                                <div className="avatar-xs me-3">
                                                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                        <i className="ri-shopping-cart-line"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mb-1">Your order is placed</h6>
                                                    <div className="font-size-12 text-muted">
                                                        <p className="mb-1">If several languages coalesce the grammar</p>
                                                        <p className="mb-0">
                                                            <i className="mdi mdi-clock-outline"></i> 3 min ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="" className="text-reset notification-item">
                                            <div className="d-flex">
                                                <img src="images/logo-dark.png" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                                <div className="flex-1">
                                                    <h6 className="mb-1">James Lemire</h6>
                                                    <div className="font-size-12 text-muted">
                                                        <p className="mb-1">It will seem like simplified English.</p>
                                                        <p className="mb-0">
                                                            <i className="mdi mdi-clock-outline"></i> 1 hours ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="" className="text-reset notification-item">
                                            <div className="d-flex">
                                                <div className="avatar-xs me-3">
                                                    <span className="avatar-title bg-success rounded-circle font-size-16">
                                                        <i className="ri-checkbox-circle-line"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mb-1">Your item is shipped</h6>
                                                    <div className="font-size-12 text-muted">
                                                        <p className="mb-1">If several languages coalesce the grammar</p>
                                                        <p className="mb-0">
                                                            <i className="mdi mdi-clock-outline"></i> 3 min ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                        <a href="" className="text-reset notification-item">
                                            <div className="d-flex">
                                                <img src="images/logo-dark.png" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                                <div className="flex-1">
                                                    <h6 className="mb-1">Salena Layfield</h6>
                                                    <div className="font-size-12 text-muted">
                                                        <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                                        <p className="mb-0">
                                                            <i className="mdi mdi-clock-outline"></i> 1 hours ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="p-2 border-top">
                                        <div className="d-grid">
                                            <a className="btn btn-sm btn-link font-size-14 text-center">
                                                <i className="mdi mdi-arrow-right-circle me-1"></i> View More..
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dropdown d-inline-block user-dropdown">
                                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="rounded-circle header-profile-user" src="images/logo-dark.png" alt="Header Avatar" />
                                    <span className="d-none d-xl-inline-block ms-1">Kevin</span>
                                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                        <i className="ri-user-line align-middle me-1"></i> Profile
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="ri-wallet-2-line align-middle me-1"></i> My Wallet
                                    </a>
                                    <a className="dropdown-item d-block" href="#">
                                        <span className="badge bg-success float-end mt-1">11</span>
                                        <i className="ri-settings-2-line align-middle me-1"></i> Settings
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="ri-lock-unlock-line align-middle me-1"></i> Lock screen
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item text-danger" href="#">
                                        <i className="ri-shut-down-line align-middle me-1 text-danger"></i> Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="vertical-menu">
                    <div data-simplebar className="h-100">
                        <div id="sidebar-menu">
                            <ul className="metismenu list-unstyled" id="side-menu">
                                <li className="menu-title">Menu</li>

                                <li>
                                    <a href="apps-kanban-board.html" className=" waves-effect">
                                        <i className="ri-artboard-2-line"></i>
                                        <span>Kanban Board</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="main-content">
                    <div className="page-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 className="mb-sm-0">Kanban Board</h4>

                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0">
                                                <li className="breadcrumb-item">
                                                    <a href="#">Nazox</a>
                                                </li>
                                                <li className="breadcrumb-item active">Kanban Board</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-lg-6">
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <img src="images/logo-dark.png" alt="logo-sm-light" className="avatar-xs" />
                                        </div>
                                        <div className="flex-1">
                                            <h5>Nazox admin Dashboard</h5>
                                            <span className="badge badge-soft-success">Open</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text-lg-end">
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item">
                                                <a href="#" className="d-inline-block">
                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-2" />
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="d-inline-block">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">J</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="d-inline-block">
                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-4" />
                                                </a>
                                            </li>

                                            <li className="list-inline-item">
                                                <a href="#" className="py-1">
                                                    <i className="mdi mdi-plus me-1"></i> New member
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card-body">
                                        <div className="dropdown float-end">
                                            <a href="#" className="dropdown-toggle arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical m-0 text-muted font-size-20"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#">
                                                    Edit
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                        <h4 className="card-title">Todo</h4>
                                        <p className="mb-0">3 Tasks</p>
                                    </div>
                                    <div className="card">
                                        <div className="card-body border-bottom">
                                            <div id="todo-task" className="task-list">
                                                <div className="card task-box">
                                                    <div className="progress progress-sm animated-progess" style={{height: "3px"}}>
                                                        <div className="progress-bar" role="progressbar" style={{width: "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="float-end ms-2">
                                                            <div>17 Apr, 2020</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <a href="#" className="">
                                                                #NZ1220
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-size-16">
                                                                <a href="#" className="text-dark">
                                                                    Admin layout design
                                                                </a>
                                                            </h5>
                                                            <p className="mb-4">Sed ut perspiciatis unde</p>
                                                        </div>

                                                        <div className="d-inline-flex team mb-0">
                                                            <div className="me-3 align-self-center">Team :</div>
                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-3" />
                                                                </a>
                                                            </div>

                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-2" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card task-box">
                                                    <div className="progress progress-sm animated-progess" style={{height: "3px"}}>
                                                        <div className="progress-bar" role="progressbar" style={{width: "48%"}} aria-valuenow="48" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="float-end ms-2">
                                                            <div>15 Apr, 2020</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <a href="#" className="">
                                                                #NZ1219
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-size-16">
                                                                <a href="#" className="text-dark">
                                                                    Chat app page
                                                                </a>
                                                            </h5>
                                                            <p className="mb-4">Neque porro quisquam est</p>
                                                        </div>

                                                        <div className="d-inline-flex team mb-0">
                                                            <div className="me-3 align-self-center">Team :</div>
                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title bg-soft-primary text-primary rounded-circle">M</span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card task-box">
                                                    <div className="progress progress-sm animated-progess" style={{height: "3px"}}>
                                                        <div className="progress-bar" role="progressbar" style={{width: "67%"}} aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="float-end ms-2">
                                                            <div>12 Apr, 2020</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <a href="#" className="">
                                                                #NZ1218
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-size-16">
                                                                <a href="#" className="text-dark">
                                                                    Ecommerce App pages
                                                                </a>
                                                            </h5>
                                                            <p className="mb-4">Itaque earum rerum hic</p>
                                                        </div>

                                                        <div className="d-inline-flex team mb-0">
                                                            <div className="me-3 align-self-center">Team :</div>
                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-5" />
                                                                </a>
                                                            </div>
                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title bg-soft-primary text-primary rounded-circle">J</span>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-6" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <a href="#" className="btn btn-primary mt-1 waves-effect waves-light">
                                                        <i className="mdi mdi-plus me-1"></i> Add New
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card-body">
                                        <div className="dropdown float-end">
                                            <a href="#" className="dropdown-toggle arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical m-0 text-muted font-size-20"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#">
                                                    Edit
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                        <h4 className="card-title">In Progress</h4>
                                        <p className="mb-0">3 Tasks</p>
                                    </div>
                                    <div className="card">
                                        <div className="card-body border-bottom">
                                            <div id="inprogress-task" className="task-list">
                                                <div className="card task-box">
                                                    <div className="progress progress-sm animated-progess" style={{height: "3px"}}>
                                                        <div className="progress-bar" role="progressbar" style={{width: "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="float-end ms-2">
                                                            <div>05 Apr, 2020</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <a href="#" className="">
                                                                #NZ1217
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-size-16">
                                                                <a href="#" className="text-dark">
                                                                    Dashboard UI
                                                                </a>
                                                            </h5>
                                                            <p className="mb-4">In enim justo, rhoncus ut</p>
                                                        </div>

                                                        <div className="d-inline-flex team mb-0">
                                                            <div className="me-3 align-self-center">Team :</div>
                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-7" />
                                                                </a>
                                                            </div>

                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title bg-soft-primary text-primary rounded-circle">E</span>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-8" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card task-box">
                                                    <div className="progress progress-sm animated-progess" style={{height: "3px"}}>
                                                        <div className="progress-bar" role="progressbar" style={{width: "48%"}} aria-valuenow="48" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="float-end ms-2">
                                                            <div>02 Apr, 2020</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <a href="#" className="">
                                                                #NZ1216
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-size-16">
                                                                <a href="#" className="text-dark">
                                                                    Authentication pages
                                                                </a>
                                                            </h5>
                                                            <p className="mb-4">Imperdiet Etiam ultricies</p>
                                                        </div>

                                                        <div className="d-inline-flex team mb-0">
                                                            <div className="me-3 align-self-center">Team :</div>
                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-7" />
                                                                </a>
                                                            </div>

                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-2" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card task-box">
                                                    <div className="progress progress-sm animated-progess" style={{height: "3px"}}>
                                                        <div className="progress-bar" role="progressbar" style={{width: "67%"}} aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="float-end ms-2">
                                                            <div>28 Mar, 2020</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <a href="#" className="">
                                                                #NZ1215
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-size-16">
                                                                <a href="#" className="text-dark">
                                                                    UI Elements pages
                                                                </a>
                                                            </h5>
                                                            <p className="mb-4">Cras ultricies mi eu turpis</p>
                                                        </div>

                                                        <div className="d-inline-flex team mb-0">
                                                            <div className="me-3 align-self-center">Team :</div>
                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-4" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <a href="#" className="btn btn-primary mt-1 waves-effect waves-light">
                                                        <i className="mdi mdi-plus me-1"></i> Add New
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-body">
                                        <div className="dropdown float-end">
                                            <a href="#" className="dropdown-toggle arrow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical m-0 text-muted font-size-20"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#">
                                                    Edit
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                        <h4 className="card-title">Completed</h4>
                                        <p className="mb-0">3 Tasks</p>
                                    </div>
                                    <div className="card">
                                        <div className="card-body border-bottom">
                                            <div id="complete-task" className="task-list">
                                                <div className="card task-box">
                                                    <div className="progress progress-sm animated-progess" style={{height: "3px"}}>
                                                        <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="float-end ms-2">
                                                            <div>24 Mar, 2020</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <a href="#" className="">
                                                                #NZ1214
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-size-16">
                                                                <a href="#" className="text-dark">
                                                                    Brand logo design
                                                                </a>
                                                            </h5>
                                                            <p className="mb-4">Aenean leo ligula, porttitor eu</p>
                                                        </div>

                                                        <div className="d-inline-flex team mb-0">
                                                            <div className="me-3 align-self-center">Team :</div>
                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title bg-soft-primary text-primary rounded-circle">K</span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card task-box">
                                                    <div className="progress progress-sm animated-progess" style={{height: "3px"}}>
                                                        <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="float-end ms-2">
                                                            <div>20 Mar, 2020</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <a href="#" className="">
                                                                #NZ1213
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-size-16">
                                                                <a href="#" className="text-dark">
                                                                    Email pages
                                                                </a>
                                                            </h5>
                                                            <p className="mb-4">It will be as simple as Occidental</p>
                                                        </div>

                                                        <div className="d-inline-flex team mb-0">
                                                            <div className="me-3 align-self-center">Team :</div>
                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title bg-soft-primary text-primary rounded-circle">R</span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-5" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card task-box">
                                                    <div className="progress progress-sm animated-progess" style={{height: "3px"}}>
                                                        <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="float-end ms-2">
                                                            <div>14 Mar, 2020</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <a href="#" className="">
                                                                #NZ1212
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-size-16">
                                                                <a href="#" className="text-dark">
                                                                    Forms pages
                                                                </a>
                                                            </h5>
                                                            <p className="mb-4">Donec quam felis, ultricies nec</p>
                                                        </div>

                                                        <div className="d-inline-flex team mb-0">
                                                            <div className="me-3 align-self-center">Team :</div>
                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-2" />
                                                                </a>
                                                            </div>

                                                            <div className="team-member">
                                                                <a href="#" className="team-member d-inline-block">
                                                                    <img src="images/logo-dark.png" className="rounded-circle avatar-xs" alt="avatar-1" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <a href="#" className="btn btn-primary mt-1 waves-effect waves-light">
                                                        <i className="mdi mdi-plus me-1"></i> Add New
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6">
                                    <script>document.write(new Date().getFullYear())</script> © Nazox.
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-sm-end d-none d-sm-block">
                                        Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default App;
