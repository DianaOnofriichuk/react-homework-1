import styled from '@emotion/styled'

export const Table = styled.table`
  border-radius: 6px;
  width: 500px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: rgb(246, 239, 232);
  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.2);
  thead {
    height: 45px;
    background: rgb(35, 72, 132);
    border-radius: 4px;
  }
  th {
    color: #ffffff;
  }
  tr {
    color: #5a5656;
    text-align: center;
    border-radius: 4px;
    &:not(:last-child) {
      margin-bottom: 7px;
    }
    &:nth-child(2n) {
      background: #a8aacf;
    }
    &:hover,
    focus {
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    }
  }
  td {
    padding: 10px;
  }
`
