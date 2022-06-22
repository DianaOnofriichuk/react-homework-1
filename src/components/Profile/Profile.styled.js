import styled from '@emotion/styled'
export const UserProfile = styled.div`
  padding-top: 20px;
  border-radius: 6px;
  width: 400px;
  height: 474px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: rgb(246, 239, 232);

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 27px;
  }
  .avatar {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
  p {
    color: rgb(140, 137, 137);
    font-size: 17px;
    text-align: center;
  }
  .name {
    color: #000000;
    font-weight: 600;
    font-size: 20px;
  }
  .stats {
    padding: 10px;
    height: 10%;
    display: flex;
    background: rgb(159, 160, 175);
    justify-content: space-between;
    align-items: center;
  }
  li {
    display: flex;
    flex-direction: column;
  }
  span {
    color: rgb(48, 46, 46);
    font-size: 15px;
    text-align: center;
  }
`
