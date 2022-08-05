import { ethers } from "hardhat";
import hre from "hardhat";

async function main() {
  const myNftFactory = await ethers.getContractFactory("myNft");
  const myNft = await myNftFactory.deploy();
  await myNft.deployed();

  await hre.run("verify:verify", {
    address: myNft.address
  });

  console.log('deployed and verified at: ', myNft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
