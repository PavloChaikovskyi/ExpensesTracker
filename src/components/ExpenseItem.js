import './ExpenseItem.css';

function ExpenseItem() {
    return (
      <div className='expense-item'>
        <div>04 Jan 2023</div>
        <div className='expense-item__description'>
          <div>Car Insurance</div>
          <div className='expense-item__price'>$200.00</div>
        </div>
      </div>
    );
}

export default ExpenseItem;   