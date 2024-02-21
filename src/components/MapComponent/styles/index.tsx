import styled from "styled-components";
import { MapContainer } from 'react-leaflet';

export const CustomMapContainer = styled(MapContainer)`
  height: 90vh;
  width: 100%;
  border-radius: 10px;
`;

export const GoBackBtn = styled.button`
  position: absolute;
  z-index: 999;
  bottom: 30px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 70px;
  width: 70px;
  background-color: #4747b2;
  color: white;
  font-size: .9rem;
  transition: all .25s;

  & svg {
    width: 40px;
    height: 40px;
  }

  &:hover {
    background-color: #f3d700;
    & svg {
      color: #333;
    }
  }
`