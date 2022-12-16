import * as React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Typography,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EastIcon from '@mui/icons-material/East';
import {
  AvatarTypo,
  BoxPanel,
} from "../../style/styledComponents";
import { LinkIcon } from "../commons/icon/multipleIcons";

const ClientsBar = () => {

  return (
    <Container>
      <BoxPanel component={Paper} height='50px' border='0 !important' padding='0 !important'>
        <Stack direction='row' alignItems='center'>
          <Stack direction='row' divider={<Divider orientation="vertical" flexItem />} flexGrow='1' spacing={2}>
            <Stack direction='row' alignItems='center' color='#000' spacing={1}>
              <Typography fontSize='1.25rem' lineHeight='24px'>Clients</Typography>
              <EastIcon />
              <Typography fontWeight='600' fontSize='1.25rem' lineHeight='24px'>The Thompsons</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' color='#000' spacing={2}>
              <Stack direction='row' alignItems='center' spacing={1}>
                <img src="Avatar1.png" alt="" width='32px' height='32px' />
                <Stack>
                  <Typography fontSize='1rem' fontWeight='500' lineHeight='19.3px' color='#333333'>Jenny Thompsons</Typography>
                  <Typography fontSize='0.75rem' fontWeight='400' lineHeight='14.5px' color='#828282'>Sub title</Typography>
                </Stack>
              </Stack>
              <Stack direction='row' alignItems='center' spacing={1}>
                <AvatarTypo>BT</AvatarTypo>
                <Stack>
                  <Typography fontSize='1rem' fontWeight='500' lineHeight='19.3px' color='#333333'>Benny Thompsons</Typography>
                  <Typography fontSize='0.75rem' fontWeight='400' lineHeight='14.5px' color='#828282'>Sub title</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2} alignItems='center'>
            <LinkIcon />
            <MoreHorizIcon />
          </Stack>
        </Stack>
      </BoxPanel>
    </Container>
  );
};

ClientsBar.propTypes = {
  children: PropTypes.any,
};

export default ClientsBar;
