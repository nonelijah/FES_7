import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIncomeAction } from "../../store/expense/expense-slice";

function IncomeInput() {
    const dispatch = useDispatch();
    const income = useSelector((store) => store.expense.income);

    function setIncome(event) {
        dispatch(setIncomeAction(parseInt(event.target.value)));
    }

    return (
        <label>
            수입 입력
            <input
                type="number"
                defaultValue={income}
                placeholder="Ex) 3000"
                onChange={setIncome}
            />
        </label>
    );
}

export default IncomeInput;
