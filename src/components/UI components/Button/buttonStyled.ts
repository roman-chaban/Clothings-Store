import styled from 'styled-components';


export const StyledButton = styled.button`
  --width: 100px;
  --height: 35px;
  --tooltip-height: 35px;
  --tooltip-width: 90px;
  --gap-between-tooltip-to-button: 18px;
  --button-color: #222;
  --tooltip-color: #fff;
  width: var(--width);
  height: var(--height);
  background: var(--button-color);
  position: relative;
  text-align: center;
  border-radius: 0.45em;
  font-family: "Arial";
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:hover {
    background: #222;
  }

  &:hover .text {
    top: -100%;
  }

  &:hover .icon {
    top: 0;
  }

  &:hover:before,
  &:hover:after {
    opacity: 1;
    visibility: visible;
  }

  &:hover:after {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
  }

  &:hover:before {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  transition: top 0.5s;
`;

export const Icon = styled.span`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%;
  transition: top 0.5s;

  svg {
    width: 24px;
    height: 24px;
  }
`;
