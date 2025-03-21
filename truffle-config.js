require('dotenv').config();
const { MNEMONIC } = process.env;
const HDWalletProvider = require('@truffle/hdwallet-provider');

console.log(MNEMONIC)

module.exports = {
  networks: {
    kaia_testnet: {
      provider: () => new HDWalletProvider(MNEMONIC, "https://public-en-kairos.node.kaia.io"),
      network_id: 1001,  // Kaia 테스트넷 체인 ID
      confirmations: 2,   // 배포 시 몇 개의 블록을 기다릴지 설정
      timeoutBlocks: 200, // 몇 블록 이후 타임아웃될지 설정
      skipDryRun: true,   // 배포 전 dry-run(테스트 배포) 스킵 여부
    },
  },

  mocha: {
    timeout: 100000,  // 테스트 실행 시간 제한
  },

  compilers: {
    solc: {
      version: "0.8.21",  // 사용하려는 Solidity 버전
      docker: false,
      settings: {
        optimizer: {
          enabled: true,   // 컴파일러 최적화 활성화
          runs: 200,       // 최적화 실행 횟수
        },
        evmVersion: "byzantium",  // 특정 EVM 버전 설정
      },
    },
  },

  db: {
    enabled: false,  // 기본적으로 비활성화됨
    host: "127.0.0.1",  // 트러플 DB 저장할 서버 주소
    adapter: {
      name: "indexeddb",  // 사용할 데이터베이스로 indexeddb 추천
      settings: {
        directory: ".db",  // 데이터 저장 경로
      },
    },
  },
};
