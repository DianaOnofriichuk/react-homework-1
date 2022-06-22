import styled from '@emotion/styled'
export const List = styled.ul`
  border-radius: 6px;
  width: 400px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: rgb(246, 239, 232);

  .item {
    height: 66px;
    padding: 10px;
    display: flex;
    align-items: center;
    border: 1px solid rgb(131, 128, 137);
    border-radius: 4px;

    &:not(:last-child) {
      margin-bottom: 7px;
    }
    &:hover,
    focus {
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
  }
  .avatar {
    width: 45px;
    border-radius: 9px;
    margin-right: 20px;
  }
  .status {
    margin-right: 15px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  .name {
    font-size: 20px;
    font-weight: 500;
    color: rgb(48, 46, 46);
  }
`
