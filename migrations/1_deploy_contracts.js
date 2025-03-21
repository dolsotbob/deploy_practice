//Truffle 프레임워크에서 사용하는 배포 스크립트(migration script) 
//이 스크립트를 실행하면 SimpleContract가 블록체인 네트워크에 배포됨 
//artifacts.require('SimpleContract'):Truffle에서 제공하는 함수로 SompleContract.sol을 가져옴 
const SimpleContract = artifacts.require('SimpleContract');

module.exports = function (deployer) {
    deployer.deploy(SimpleContract, "Hello, Blockchain!");
};
