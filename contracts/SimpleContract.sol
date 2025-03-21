// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; //이 컨트랙트는 Solidity 0.8.0 이상에서 컴파일됨

//컨트랙트 선언: SimpleContract라는 이름의 스마트 컨트랙트를 정의합니다.
contract SimpleContract {
    string public message;

    //컨트랙트가 배포될 때 실행되는 함수
    constructor(string memory _message) {
        message = _message;
    }

    //새로움 메세지를 설정하는 퍼블릭 함수
    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}
