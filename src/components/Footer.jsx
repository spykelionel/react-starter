import "@assets/styles/footer.css";

const Footer = () => {
  return (
    <footer color="dark" className="bg-dark page-footer font-small pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <p className="p-0 m-0">University of Bamenda</p>
            <small className="text-small">University of the Future</small>
            <div className="">
              <div>
                <p className="text-primary">Address</p>
                <p>P.O. Box 39 Bambili, NW Region - Cameroon</p>
              </div>
              <div>
                <p className="text-primary">Phone Line 1</p>
                <p>(+237) 233 366 033</p>
              </div>
              <div>
                <p className="text-primary">Phone Line 2</p>
                <p>(+237) 233 366 033</p>
              </div>
            </div>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3 flex align-center justify-center">
            <h5 className="text-uppercase border-bottom border-primary  pb-2">
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li className="">
                <a href="#!">Events</a>
              </li>
              <li className="">
                <a href="#!">About Us</a>
              </li>
              <li className="">
                <a href="#!">Campus News</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3 flex align-center justify-center">
            <h5 className="text-uppercase w-contain border-bottom border-primary pb-2">
              Admin Area
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Web mail</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        Copyright © {new Date().getFullYear()}
        <a href="https://skye8.tech/"> skye8.tech</a>
      </div>
    </footer>
  );
};

export default Footer;
