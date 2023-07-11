import styled from '@emotion/styled'

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  font-size: 12px;
  box-shadow: 0px 1px 2px 0px rgba(132, 126, 129, 0.65), 1px 2px 4px 0px rgba(132, 126, 129, 0.65), 2px 4px 8px 0px rgba(132, 126, 129, 0.65), 2px 4px 16px 0px rgba(132, 126, 129, 0.65);

 
`;

export const Button = styled.button`
  margin: auto;
  cursor: pointer;
  width: 100px;
    height: 30px;
    font-size: 16px;
    text-align: center;

  border-radius: 4px;
  border: 1px solid #254C6F;
  background-color: #B2d5ee;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  
`;