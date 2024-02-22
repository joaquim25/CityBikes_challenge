import styled from "styled-components";

export const HeroContainer = styled.div`
    float: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroImage = styled.img`
    height: 160px;
`

export const HeroList = styled.ul`
    width: 100%;

    & span {
        font-weight: 500;
    }
`

export const OnlineItem = styled.li`
    display: flex;
    align-items: center;
    padding: .5rem;

  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: green;
    margin-right: 1rem;
  }
`

export const OfflineItem = styled(OnlineItem)`
    &::before {
        background: red;
    }
`

export const UnknownItem = styled(OnlineItem)`
    &::before {
        background: blue;
    }
`