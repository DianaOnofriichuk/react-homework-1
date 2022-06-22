import styled from '@emotion/styled'

export const StatisticsCard = styled.section`
  border-radius: 6px;
  width: 400px;
  height: 150px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: rgb(246, 239, 232);

  .title {
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(48, 46, 46);
  }

  .stat-list {
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item {
    height: 100%;
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  span {
    text-align: center;
    color: beige;
  }
`
