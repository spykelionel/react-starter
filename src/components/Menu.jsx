import logo from "@assets/images/logo.svg";
import {
  Badge,
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

import { Chat, Notifications, QuestionMarkOutlined } from "@mui/icons-material";
import ModalWrapper from "./ModalWrapper";
import Spinner from "./atoms/Spinner";

const Menu = () => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);
  const openLogoutModal = () => setOpenModal(true);
  const { pathname } = useLocation();
  const [tabs] = useState([
    { name: "Report a Crime", to: "/report-crime", active: true },
    {
      name: "Fraud Detection",
      to: "/fraud-detection",
      active: false,
    },
    { name: "Get statistics", to: "/statistics", active: false },
    { name: "Blog", to: "/blog", active: false },
    { name: "Tips", to: "/tips", active: false },
  ]);

  const langauges = [
    {
      value: "English",
      label: "English",
    },
    {
      value: "French",
      label: "French",
    },
  ];

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={"dark"}
      variant={"dark"}
      className={`p-3 border-bottom-0`}
      style={{ zIndex: "2" }}
    >
      <Container>
        <Navbar.Brand href="/" className="self-center">
          <img src={logo} alt="" srcSet="" width={"60px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="self-center" id="responsive-navbar-nav">
          {true ? (
            <Nav className="me-auto">
              {tabs.map(({ name, to }) => (
                <Nav.Link
                  className={`text-white width-fit ${
                    pathname === to ? "border-bottom" : ""
                  }`}
                  key={name}
                  href={to}
                >
                  {name}
                </Nav.Link>
              ))}
            </Nav>
          ) : (
            <Nav className="me-auto">
              <Nav.Link href="/"></Nav.Link>
              <Nav.Link href="/"></Nav.Link>
              <Nav.Link href="/"></Nav.Link>
            </Nav>
          )}
          {false && (
            <Nav className="gap-2">
              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                alignContent={"center"}
              >
                <Grid
                  item
                  className="self-center"
                  sx={{
                    mt: "3px",
                  }}
                >
                  <Nav.Link href="/notifications">
                    <Tooltip title="notifications">
                      <Badge color="error" badgeContent={0}>
                        <Notifications color="action" />
                      </Badge>
                    </Tooltip>
                  </Nav.Link>
                </Grid>
                <Grid
                  item
                  className="self-center"
                  sx={{
                    mt: "3px",
                  }}
                >
                  <Nav.Link
                    href="/chat"
                    style={{
                      margin: "0 10px 0 5px",
                    }}
                  >
                    <Tooltip title="chats">
                      <Badge color="error" badgeContent={0}>
                        <Chat color="action" />
                      </Badge>
                    </Tooltip>
                  </Nav.Link>
                </Grid>
                <Grid
                  item
                  sx={{
                    mx: "5px",
                    cursor: "pointer",
                  }}
                >
                  User
                </Grid>
              </Grid>
            </Nav>
          )}
          <Nav className="gap-4">
            {false ? (
              <Tooltip title="Logout">
                <Button
                  onClick={openLogoutModal}
                  className="btn bg-danger text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-power"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.5 1v7h1V1z" />
                    <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                  </svg>
                </Button>
              </Tooltip>
            ) : (
              <Container>
                <Grid
                  display={"flex"}
                  sx={{
                    alignItems: "center",
                    justifyItems: "flex-end",
                  }}
                  gap={2}
                >
                  <Grid item>
                    <Nav.Link
                      className="text-white px-3 py-2 bg-primary rounded-border-sm "
                      href="/login"
                    >
                      Report a Crime
                    </Nav.Link>
                  </Grid>
                  <Grid item display="flex" alignItems={"center"} gap={1}>
                    <TextField
                      fullWidth
                      id="outlined-select-language"
                      select
                      defaultValue="English"
                      value={"English"}
                      onChange={null}
                      name="language"
                      sx={{
                        border: "none",
                        "& fieldset": { border: "none" },
                        color: "white !important",
                        "& .MuiSelect-icon": {
                          color: "white",
                        },
                      }}
                      InputProps={{
                        style: {
                          color: "white", // styles for the value
                        },
                      }}
                      m={0}
                    >
                      {langauges.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <>
                      <QuestionMarkOutlined
                        className="border-radius-full border-secondary pointer"
                        fontSize="14px"
                      />
                    </>
                  </Grid>
                </Grid>
              </Container>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {openModal ? (
        <ModalWrapper openModal={openModal} closeModal={closeModal}>
          <LogoutModal closeModal={closeModal} />
        </ModalWrapper>
      ) : (
        <></>
      )}
    </Navbar>
  );
};

export const LogoutModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);
  const confirmAndLogout = async () => {
    setIsLoading(true);
    try {
      const res = await logoutUser();
      console.log(res);
      if (res.success) {
        closeModal();
        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
    setIsLoading(false);
    return;
  };
  return (
    <Container>
      {error ? (
        <Box className="text-danger">Can not log out at this time.</Box>
      ) : (
        <></>
      )}
      You will be logged out.
      <Grid
        p={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <Button onClick={confirmAndLogout} className="text-danger">
            Logout
          </Button>
        )}
        <Button onClick={closeModal} className="bg-primary text-white">
          Cancel
        </Button>
      </Grid>
    </Container>
  );
};

export default Menu;
