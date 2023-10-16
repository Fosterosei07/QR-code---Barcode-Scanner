const Index = ()=>{

    return(

    <div id="bg">
        <div className="position-absolute top-50 start-50 translate-middle  border " id="content">
            <div className="container "  id="img">
            <img src="../public/images/image-qr-code.png" alt="" className="w-100 " id="imgs"/>
            </div>
            <div className="container " >
                <p className="fw-bold fs-4 d-flex justify-content-center" id="hea"> Improve your front-end skills by building projects</p>
                <p className="d-flex justify-content-center" id="pag">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    </div>
    )
};

export default Index;