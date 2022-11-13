import styled from 'styled-components';
import { shade } from 'polished';
import { PropsStyleForm } from '../../interfaces/post';

export const ContainerDashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 110px;
  @media only screen and (max-width: 700px) {
    padding: 110px 20px 20px 20px;
  }
`;

export const InputError = styled.span`
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #c73e1d;
  font-size: 14px;
  text-align: left;
`;

export const FormAddPost = styled.form<PropsStyleForm>`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
  margin-bottom: 40px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;

  input {
    width: 100%;
    height: 40px;
    padding: 0px 20px;
    border-radius: 8px;
    border: 1px solid #494949;
    background-color: #494949;
    color: #a8a8b3;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  textarea {
    width: 100%;
    height: 80px;
    padding: 20px;
    margin-top: 10px;
    border-radius: 8px;
    border: 1px solid #494949;
    background-color: #494949;
    color: #a8a8b3;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 98px;
    height: 41px;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => {
      return props.readyPost ? '#71bb00' : '#5f5f5f';
    }};
    color: #333;
    font-weight: bold;
    transition: background-color 0.2s;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const AvatarEdit = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  transition: all 0.3s ease-out;

  img {
    max-width: 88px;
    max-height: 88px;
    min-width: 88px;
    min-height: 88px;
    border-radius: 30px;
  }

  svg {
    cursor: pointer;
    margin-left: 15px;
    color: #5a9500;
    transition: all 0.3s ease-out;

    &:hover {
      color: ${shade(0.2, '#5a9500')};
    }
  }
`;

export const Avatar = styled.div`
  position: relative;

  max-width: 88px;
  max-height: 88px;
  min-width: 88px;
  min-height: 88px;
  object-fit: contain;
  border-radius: 30px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  margin-bottom: 20px;
  transition: all 0.3s ease-out;

  label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;

    input {
      display: none;
    }
  }
`;

export const BtnsPostEditDiscard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  margin-left: auto;
  margin-top: 35px;
`;

export const BtnDiscardChanges = styled.div`
  color: #666;
  cursor: pointer;
  text-decoration: underline;
  transition: all 0.3s ease-out;

  &:hover {
    color: ${shade(0.2, '#C73E1D')};
  }
`;

export const TitlePosts = styled.div`
  width: 600px;
  margin-bottom: 10px;
  h5 {
    margin-right: auto;
    color: #7a7a7a;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Post = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  min-height: 100px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  transition: transform 0.2s;

  div:nth-child(1) {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 88px;
      max-height: 88px;
      min-width: 88px;
      min-height: 88px;
      border-radius: 30px;
      border: solid 1px #4b4b4b;
    }
  }

  div:nth-child(2) {
    width: 75%;
    display: flex;
    flex-direction: column;
    p {
      color: #9f9f9f;
      padding-bottom: 15px;
    }

    div {
      span {
        font-size: 13px;
        color: #5f5f5f;
      }
      strong {
        font-size: 14px;
        font-weight: 300;
        color: #7a7a7a;
      }
    }
  }

  div:nth-child(3) {
    width: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    cursor: pointer;

    svg:nth-child(1) {
      color: #71bb00;
      &:hover {
        color: ${shade(0.2, '#71bb00')};
      }
    }

    svg:nth-child(2) {
      color: #c73e1d;
      &:hover {
        color: ${shade(0.2, '#C73E1D')};
      }
    }
  }

  &:hover {
    transform: scale(1.03, 1.03);
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const PostContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 600px;
  margin-top: 20px;

  img {
    margin-right: 20px;
    max-width: 88px;
    max-height: 88px;
    min-width: 88px;
    min-height: 88px;
    border-radius: 30px;
    border: solid 1px #4b4b4b;
  }
`;

export const PostText = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  box-sizing: border-box;

  p {
    margin-bottom: 20px;
    color: #9f9f9f;
    width: 450px;
    height: 50px;
    line-break: auto;
  }

  span {
    font-size: 13px;
    color: #5f5f5f;
  }

  strong {
    font-size: 14px;
    font-weight: 300;
    color: #7a7a7a;
  }
`;

export const NoAvatar = styled.img`
  margin-right: 20px;
  max-width: 88px;
  max-height: 88px;
  min-width: 88px;
  min-height: 88px;
  padding: 25px;
  border-radius: 30px;
  border: solid 1px #4b4b4b;
`;
