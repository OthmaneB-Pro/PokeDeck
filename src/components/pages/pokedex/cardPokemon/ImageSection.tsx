import styled from "styled-components";

export default function ImageSection({ src, alt }: any) {
  return (
    <ImageWrapper>
      <img src={src} alt={alt} />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  border-radius: 10px;
  height: 250px;
  background: #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70%;
    height: auto;
    object-fit: cover;
  }
`;
