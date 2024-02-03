let accounts = require('../../accounts');

exports.accountCreate = async(req, res) => {
  try{
  const newAccount = await Account.create(req.body);
  return res.status(201).json(newAccount);
  
  }catch(error){
    console.log(error);
    return res.status(500).json("newAccount");
  };
};

exports.accountDelete =async (req, res) => {
  try{
  const { accountId } = req.params;
  const foundAccount = accounts.find((account) => account.id === +accountId);
  if (foundAccount) {
    accounts = accounts.filter((account) => account.id !== +accountId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
}catch(error){
    console.log(error);
    return res.status(500).json("newAccount");
  };

  }

exports.accountUpdate = async(req, res) => {
  try{
   
const accountId = req.params.accountId;
const foundAccount = accountId;
await Account.findByIdAndUpdate(foundAccount,req.body);
return res.status(204).end()


  }catch(error){
    console.log(error);
    return res.status(500).json("Server error");
  }
 
exports.accountsGet = async(req, res) => {
  try{
    const accounts =await Account.find();
return res.status(200).json(accounts);
  }catch(error){
    console.log(error);
    return res.status(500).json("accounts");
};
}

exports.getAccountByUsername = (req, res) => {
  const { username } = req.params;
  const foundAccount = accounts.find(
    (account) => account.username === username
  );
  if (req.query.currency === 'usd') {
    const accountInUsd = { ...foundAccount, funds: foundAccount.funds * 3.31 };
    res.status(201).json(accountInUsd);
  }
  res.status(201).json(foundAccount);
}
