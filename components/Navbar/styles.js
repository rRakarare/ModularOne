import styled from "styled-components";

export const Dot = styled.div`
  width: ${(props) => `${props.dims}px`};
  height: ${(props) => `${props.dims}px`};
  background: #f7d147;
  position: absolute;
  border-radius: 0%;
  opacity: 0;
  bottom: -5px;
  left: ${(props) => `${-props.dims + 20 + 222}px`};
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
`;

export const Anker = styled.a`
  color: ${(props) => {
    props.textcolor;
  }};
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 500;
  padding: 0 20px 0 20px;
  display: inline-block;
  -webkit-transition: color 0.25s ease-in-out;
  transition: color 0.25s ease-in-out;
  cursor: pointer;

  :hover {
    color: #f7d147;
  }
  &.active {
    color: #f7d147;
  }

  &:hover ~ ${Dot} {
    transform: ${(props) => {
      return `translateX(${props.widthParam}px) rotate(${
        props.rotes * 360
      }deg)`;
    }};

    -webkit-transition: translateX 0.25s ease-in-out,
      rotate 0.25s ease-in-out opacity 0.25s ease-in-out;
    transition: translateX 0.25s ease-in-out,
      rotate 0.25s ease-in-out opacity 0.25s ease-in-out;
    opacity: 1;
  }
`;

export const AnkerMob = styled.a`
  color: ${(props) => {
    props.textcolor;
  }};
  text-decoration: none;
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 500;
  padding: 0 20px 0 20px;
  display: inline-block;
  -webkit-transition: color 0.25s ease-in-out;
  transition: color 0.25s ease-in-out;
  cursor: pointer;

  :hover {
    color: #f7d147;
  }
  &.active {
    color: #f7d147;
  }
`;
