import antic from "@assets/images/antic.svg";
import cam from "@assets/images/cam.svg";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function SectionHead() {
  return (
    <Box className="section-head text-white" sx={{ py: "12rem", px: "5rem" }}>
      <Grid display="flex" justifyContent="space-evenly" alignItems={"center"}>
        <Grid item>
          <img src={antic} width={"200px"} alt="antic-logo" srcSet="" />
        </Grid>
        <Grid item sx={{ width: "20rem" }}></Grid>
        <Grid
          item
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={3}
        >
          <Typography variant="h3" component={"h3"}>
            Crime Report System
          </Typography>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            odit! Odio velit expedita quos libero ut dolor a? Rerum vel, eum eos
            corporis deserunt perspiciatis. Ducimus architecto velit hic autem.
          </Box>
          <Link
            className="text-white px-3 py-2 bg-primary rounded-border-sm text-decoration-none"
            to="/report-crime"
          >
            Report a Crime
          </Link>
        </Grid>
        <Grid item sx={{ width: "20rem" }}></Grid>
        <Grid item>
          <img src={cam} width={"200px"} alt="antic-logo" srcSet="" />
        </Grid>
      </Grid>
    </Box>
  );
}
