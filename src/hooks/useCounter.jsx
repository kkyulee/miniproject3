//여러 컴포넌트에서 동일한 로직(함수) 재사용 가능
//사용자 정의 훅 : use + 사용자
//useState, useEffect, 상태변수, 함수 등 설계
//다른 컴포넌트에서도 숫자 증가/감소 4군데?
import { useState } from 'react';
const useCounter = (initial = 0) => {
    const [state, setState] = useState(initial);
    const onUp = () => {
        setState(state + 1);
    };
    const onDown = () => {
        setState(state - 1);
    };

    return { onUp, onDown, state };
};

export default useCounter;

/*
const use사용자 = () => {
    return {};
};
export default use사용자;
*/
