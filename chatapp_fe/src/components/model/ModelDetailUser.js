import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import avt from "../../images/av.jpg";
import Avatar from "@mui/material/Avatar";

import "./ModelDetailUser.scss";
import Contex from "../../store/Context";
import { SetShowUpdateForm } from "../../store/Actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  height: "85vh",
  borderRadius: "8px",
  boxShadow: 24,
  paddingTop: 1,
  paddingBottom: 1,
};

const ModelDetailUser = ({ openModelUser, setOpenModelUser }) => {
  const handleOpen = () => setOpenModelUser(true);
  const handleClose = () => setOpenModelUser(false);
  const { state, depatch } = React.useContext(Contex);
  //detructering...
  const { user, showUpdateForm } = state;

  const handleOpenAvartar = () => {
    if (user.avatar) {
      window.open(user?.avatar, "_blank");
    }
  };

  const handleShowUpdateForm = () => {
    handleClose();

    //open update dialog
    depatch(SetShowUpdateForm(true));
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModelUser}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModelUser}>
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 2,
                paddingRight: 2,
                paddingBottom: 1,
              }}
            >
              <p style={{ fontSize: "18px" }}>Th??ng tin t??i kho???n</p>
              <Box component="span" display="inline">
                <CloseIcon onClick={handleClose} />
              </Box>
            </Box>

            <div className="bg">
              <div className="bg-info">
                <Avatar
                  alt={user?.first_name}
                  src={user?.avatar}
                  className="avatar"
                  onClick={() => handleOpenAvartar()}
                />
                <p>{user?.first_name + " " + user?.last_name}</p>
              </div>
            </div>

            <div className="info-person">
              <div>
                <h5>Th??ng tin c?? nh??n</h5>
                <p>
                  <span>Email:</span>
                  <span>{user?.email}</span>
                </p>
                <p>
                  <span>Gi???i t??nh:</span>
                  <span>{user?.sex === 1 ? "Nam" : "N???"}</span>
                </p>
                {/* <p>
                  <span>Ng??y sinh:</span>
                  <span>{user?.date_of_birth}</span>
                </p> */}
              </div>
              <Button
                className="btn-update"
                variant="outlined"
                onClick={() => handleShowUpdateForm()}
              >
                C???p nh???t th??ng tin
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModelDetailUser;
