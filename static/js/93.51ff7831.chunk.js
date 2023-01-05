(this["webpackJsonp@scaffold-eth/react-app"]=this["webpackJsonp@scaffold-eth/react-app"]||[]).push([[93],{545:function(n){n.exports=JSON.parse('{"language":"Solidity","sources":{"contracts/wsBASH.sol":{"content":"/**\\r\\n *Submitted for verification at Etherscan.io on 2021-06-12\\r\\n*/\\r\\n\\r\\n// SPDX-License-Identifier: MIT\\r\\npragma solidity 0.7.5;\\r\\n\\r\\n/**\\r\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\r\\n */\\r\\ninterface IERC20 {\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens in existence.\\r\\n     */\\r\\n    function totalSupply() external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the amount of tokens owned by `account`.\\r\\n     */\\r\\n    function balanceOf(address account) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from the caller\'s account to `recipient`.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transfer(address recipient, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the remaining number of tokens that `spender` will be\\r\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\r\\n     * zero by default.\\r\\n     *\\r\\n     * This value changes when {approve} or {transferFrom} are called.\\r\\n     */\\r\\n    function allowance(address owner, address spender) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `amount` as the allowance of `spender` over the caller\'s tokens.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\r\\n     * that someone may use both the old and the new allowance by unfortunate\\r\\n     * transaction ordering. One possible solution to mitigate this race\\r\\n     * condition is to first reduce the spender\'s allowance to 0 and set the\\r\\n     * desired value afterwards:\\r\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     */\\r\\n    function approve(address spender, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\\r\\n     * allowance mechanism. `amount` is then deducted from the caller\'s\\r\\n     * allowance.\\r\\n     *\\r\\n     * Returns a boolean value indicating whether the operation succeeded.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     */\\r\\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\r\\n     * another (`to`).\\r\\n     *\\r\\n     * Note that `value` may be zero.\\r\\n     */\\r\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\r\\n\\r\\n    /**\\r\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\r\\n     * a call to {approve}. `value` is the new allowance.\\r\\n     */\\r\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\r\\n}\\r\\n\\r\\n/**\\r\\n * @dev Wrappers over Solidity\'s arithmetic operations with added overflow\\r\\n * checks.\\r\\n *\\r\\n * Arithmetic operations in Solidity wrap on overflow. This can easily result\\r\\n * in bugs, because programmers usually assume that an overflow raises an\\r\\n * error, which is the standard behavior in high level programming languages.\\r\\n * `SafeMath` restores this intuition by reverting the transaction when an\\r\\n * operation overflows.\\r\\n *\\r\\n * Using this library instead of the unchecked operations eliminates an entire\\r\\n * class of bugs, so it\'s recommended to use it always.\\r\\n */\\r\\nlibrary SafeMath {\\r\\n    /**\\r\\n     * @dev Returns the addition of two unsigned integers, reverting on\\r\\n     * overflow.\\r\\n     *\\r\\n     * Counterpart to Solidity\'s `+` operator.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - Addition cannot overflow.\\r\\n     */\\r\\n    function add(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        uint256 c = a + b;\\r\\n        require(c >= a, \\"SafeMath: addition overflow\\");\\r\\n\\r\\n        return c;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the subtraction of two unsigned integers, reverting on\\r\\n     * overflow (when the result is negative).\\r\\n     *\\r\\n     * Counterpart to Solidity\'s `-` operator.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - Subtraction cannot overflow.\\r\\n     */\\r\\n    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        return sub(a, b, \\"SafeMath: subtraction overflow\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on\\r\\n     * overflow (when the result is negative).\\r\\n     *\\r\\n     * Counterpart to Solidity\'s `-` operator.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - Subtraction cannot overflow.\\r\\n     */\\r\\n    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\\r\\n        require(b <= a, errorMessage);\\r\\n        uint256 c = a - b;\\r\\n\\r\\n        return c;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the multiplication of two unsigned integers, reverting on\\r\\n     * overflow.\\r\\n     *\\r\\n     * Counterpart to Solidity\'s `*` operator.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - Multiplication cannot overflow.\\r\\n     */\\r\\n    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        // Gas optimization: this is cheaper than requiring \'a\' not being zero, but the\\r\\n        // benefit is lost if \'b\' is also tested.\\r\\n        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522\\r\\n        if (a == 0) {\\r\\n            return 0;\\r\\n        }\\r\\n\\r\\n        uint256 c = a * b;\\r\\n        require(c / a == b, \\"SafeMath: multiplication overflow\\");\\r\\n\\r\\n        return c;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the integer division of two unsigned integers. Reverts on\\r\\n     * division by zero. The result is rounded towards zero.\\r\\n     *\\r\\n     * Counterpart to Solidity\'s `/` operator. Note: this function uses a\\r\\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\\r\\n     * uses an invalid opcode to revert (consuming all remaining gas).\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The divisor cannot be zero.\\r\\n     */\\r\\n    function div(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        return div(a, b, \\"SafeMath: division by zero\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on\\r\\n     * division by zero. The result is rounded towards zero.\\r\\n     *\\r\\n     * Counterpart to Solidity\'s `/` operator. Note: this function uses a\\r\\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\\r\\n     * uses an invalid opcode to revert (consuming all remaining gas).\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The divisor cannot be zero.\\r\\n     */\\r\\n    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\\r\\n        require(b > 0, errorMessage);\\r\\n        uint256 c = a / b;\\r\\n        // assert(a == b * c + a % b); // There is no case in which this doesn\'t hold\\r\\n\\r\\n        return c;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\r\\n     * Reverts when dividing by zero.\\r\\n     *\\r\\n     * Counterpart to Solidity\'s `%` operator. This function uses a `revert`\\r\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\r\\n     * invalid opcode to revert (consuming all remaining gas).\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The divisor cannot be zero.\\r\\n     */\\r\\n    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        return mod(a, b, \\"SafeMath: modulo by zero\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\r\\n     * Reverts with custom message when dividing by zero.\\r\\n     *\\r\\n     * Counterpart to Solidity\'s `%` operator. This function uses a `revert`\\r\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\r\\n     * invalid opcode to revert (consuming all remaining gas).\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - The divisor cannot be zero.\\r\\n     */\\r\\n    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\\r\\n        require(b != 0, errorMessage);\\r\\n        return a % b;\\r\\n    }\\r\\n}\\r\\n\\r\\n\\r\\n/**\\r\\n * @dev Collection of functions related to the address type\\r\\n */\\r\\nlibrary Address {\\r\\n    /**\\r\\n     * @dev Returns true if `account` is a contract.\\r\\n     *\\r\\n     * [IMPORTANT]\\r\\n     * ====\\r\\n     * It is unsafe to assume that an address for which this function returns\\r\\n     * false is an externally-owned account (EOA) and not a contract.\\r\\n     *\\r\\n     * Among others, `isContract` will return false for the following\\r\\n     * types of addresses:\\r\\n     *\\r\\n     *  - an externally-owned account\\r\\n     *  - a contract in construction\\r\\n     *  - an address where a contract will be created\\r\\n     *  - an address where a contract lived, but was destroyed\\r\\n     * ====\\r\\n     */\\r\\n    function isContract(address account) internal view returns (bool) {\\r\\n        // This method relies in extcodesize, which returns 0 for contracts in\\r\\n        // construction, since the code is only stored at the end of the\\r\\n        // constructor execution.\\r\\n\\r\\n        uint256 size;\\r\\n        // solhint-disable-next-line no-inline-assembly\\r\\n        assembly { size := extcodesize(account) }\\r\\n        return size > 0;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\r\\n     * `recipient`, forwarding all available gas and reverting on errors.\\r\\n     *\\r\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\r\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\r\\n     * imposed by `transfer`, making them unable to receive funds via\\r\\n     * `transfer`. {sendValue} removes this limitation.\\r\\n     *\\r\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\r\\n     *\\r\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\r\\n     * taken to not create reentrancy vulnerabilities. Consider using\\r\\n     * {ReentrancyGuard} or the\\r\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\r\\n     */\\r\\n    function sendValue(address payable recipient, uint256 amount) internal {\\r\\n        require(address(this).balance >= amount, \\"Address: insufficient balance\\");\\r\\n\\r\\n        // solhint-disable-next-line avoid-low-level-calls, avoid-call-value\\r\\n        (bool success, ) = recipient.call{ value: amount }(\\"\\");\\r\\n        require(success, \\"Address: unable to send value, recipient may have reverted\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Performs a Solidity function call using a low level `call`. A\\r\\n     * plain`call` is an unsafe replacement for a function call: use this\\r\\n     * function instead.\\r\\n     *\\r\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\r\\n     * function (like regular Solidity function calls).\\r\\n     *\\r\\n     * Returns the raw returned data. To convert to the expected return value,\\r\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `target` must be a contract.\\r\\n     * - calling `target` with `data` must not revert.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\r\\n      return functionCall(target, data, \\"Address: low-level call failed\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\r\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCall(address target, bytes memory data, string memory errorMessage) internal returns (bytes memory) {\\r\\n        return _functionCallWithValue(target, data, 0, errorMessage);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\r\\n     * but also transferring `value` wei to `target`.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - the calling contract must have an ETH balance of at least `value`.\\r\\n     * - the called Solidity function must be `payable`.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\\r\\n        return functionCallWithValue(target, data, value, \\"Address: low-level call with value failed\\");\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\r\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\r\\n     *\\r\\n     * _Available since v3.1._\\r\\n     */\\r\\n    function functionCallWithValue(address target, bytes memory data, uint256 value, string memory errorMessage) internal returns (bytes memory) {\\r\\n        require(address(this).balance >= value, \\"Address: insufficient balance for call\\");\\r\\n        return _functionCallWithValue(target, data, value, errorMessage);\\r\\n    }\\r\\n\\r\\n    function _functionCallWithValue(address target, bytes memory data, uint256 weiValue, string memory errorMessage) private returns (bytes memory) {\\r\\n        require(isContract(target), \\"Address: call to non-contract\\");\\r\\n\\r\\n        // solhint-disable-next-line avoid-low-level-calls\\r\\n        (bool success, bytes memory returndata) = target.call{ value: weiValue }(data);\\r\\n        if (success) {\\r\\n            return returndata;\\r\\n        } else {\\r\\n            // Look for revert reason and bubble it up if present\\r\\n            if (returndata.length > 0) {\\r\\n                // The easiest way to bubble the revert reason is using memory via assembly\\r\\n\\r\\n                // solhint-disable-next-line no-inline-assembly\\r\\n                assembly {\\r\\n                    let returndata_size := mload(returndata)\\r\\n                    revert(add(32, returndata), returndata_size)\\r\\n                }\\r\\n            } else {\\r\\n                revert(errorMessage);\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\\r\\n/**\\r\\n * @dev Implementation of the {IERC20} interface.\\r\\n *\\r\\n * This implementation is agnostic to the way tokens are created. This means\\r\\n * that a supply mechanism has to be added in a derived contract using {_mint}.\\r\\n * For a generic mechanism see {ERC20PresetMinterPauser}.\\r\\n *\\r\\n * TIP: For a detailed writeup see our guide\\r\\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\\r\\n * to implement supply mechanisms].\\r\\n *\\r\\n * We have followed general OpenZeppelin guidelines: functions revert instead\\r\\n * of returning `false` on failure. This behavior is nonetheless conventional\\r\\n * and does not conflict with the expectations of ERC20 applications.\\r\\n *\\r\\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\\r\\n * This allows applications to reconstruct the allowance for all accounts just\\r\\n * by listening to said events. Other implementations of the EIP may not emit\\r\\n * these events, as it isn\'t required by the specification.\\r\\n *\\r\\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\\r\\n * functions have been added to mitigate the well-known issues around setting\\r\\n * allowances. See {IERC20-approve}.\\r\\n */\\r\\ncontract ERC20 is IERC20 {\\r\\n    using SafeMath for uint256;\\r\\n    using Address for address;\\r\\n\\r\\n    mapping (address => uint256) private _balances;\\r\\n\\r\\n    mapping (address => mapping (address => uint256)) private _allowances;\\r\\n\\r\\n    uint256 private _totalSupply;\\r\\n\\r\\n    string private _name;\\r\\n    string private _symbol;\\r\\n    uint8 private _decimals;\\r\\n\\r\\n    /**\\r\\n     * @dev Sets the values for {name} and {symbol}, initializes {decimals} with\\r\\n     * a default value of 18.\\r\\n     *\\r\\n     * To select a different value for {decimals}, use {_setupDecimals}.\\r\\n     *\\r\\n     * All three of these values are immutable: they can only be set once during\\r\\n     * construction.\\r\\n     */\\r\\n    constructor (string memory name, string memory symbol) {\\r\\n        _name = name;\\r\\n        _symbol = symbol;\\r\\n        _decimals = 18;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the name of the token.\\r\\n     */\\r\\n    function name() public view returns (string memory) {\\r\\n        return _name;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\r\\n     * name.\\r\\n     */\\r\\n    function symbol() public view returns (string memory) {\\r\\n        return _symbol;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the number of decimals used to get its user representation.\\r\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\r\\n     * be displayed to a user as `5,05` (`505 / 10 ** 2`).\\r\\n     *\\r\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\r\\n     * Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is\\r\\n     * called.\\r\\n     *\\r\\n     * NOTE: This information is only used for _display_ purposes: it in\\r\\n     * no way affects any of the arithmetic of the contract, including\\r\\n     * {IERC20-balanceOf} and {IERC20-transfer}.\\r\\n     */\\r\\n    function decimals() public view returns (uint8) {\\r\\n        return _decimals;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC20-totalSupply}.\\r\\n     */\\r\\n    function totalSupply() public view override returns (uint256) {\\r\\n        return _totalSupply;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC20-balanceOf}.\\r\\n     */\\r\\n    function balanceOf(address account) public view override returns (uint256) {\\r\\n        return _balances[account];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC20-transfer}.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `recipient` cannot be the zero address.\\r\\n     * - the caller must have a balance of at least `amount`.\\r\\n     */\\r\\n    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {\\r\\n        _transfer(msg.sender, recipient, amount);\\r\\n        return true;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC20-allowance}.\\r\\n     */\\r\\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\\r\\n        return _allowances[owner][spender];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC20-approve}.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `spender` cannot be the zero address.\\r\\n     */\\r\\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\\r\\n        _approve(msg.sender, spender, amount);\\r\\n        return true;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev See {IERC20-transferFrom}.\\r\\n     *\\r\\n     * Emits an {Approval} event indicating the updated allowance. This is not\\r\\n     * required by the EIP. See the note at the beginning of {ERC20};\\r\\n     *\\r\\n     * Requirements:\\r\\n     * - `sender` and `recipient` cannot be the zero address.\\r\\n     * - `sender` must have a balance of at least `amount`.\\r\\n     * - the caller must have allowance for ``sender``\'s tokens of at least\\r\\n     * `amount`.\\r\\n     */\\r\\n    function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool) {\\r\\n        _transfer(sender, recipient, amount);\\r\\n        _approve(sender, msg.sender, _allowances[sender][msg.sender].sub(amount, \\"ERC20: transfer amount exceeds allowance\\"));\\r\\n        return true;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\\r\\n     *\\r\\n     * This is an alternative to {approve} that can be used as a mitigation for\\r\\n     * problems described in {IERC20-approve}.\\r\\n     *\\r\\n     * Emits an {Approval} event indicating the updated allowance.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `spender` cannot be the zero address.\\r\\n     */\\r\\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\\r\\n        _approve(msg.sender, spender, _allowances[msg.sender][spender].add(addedValue));\\r\\n        return true;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\\r\\n     *\\r\\n     * This is an alternative to {approve} that can be used as a mitigation for\\r\\n     * problems described in {IERC20-approve}.\\r\\n     *\\r\\n     * Emits an {Approval} event indicating the updated allowance.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `spender` cannot be the zero address.\\r\\n     * - `spender` must have allowance for the caller of at least\\r\\n     * `subtractedValue`.\\r\\n     */\\r\\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\\r\\n        _approve(msg.sender, spender, _allowances[msg.sender][spender].sub(subtractedValue, \\"ERC20: decreased allowance below zero\\"));\\r\\n        return true;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Moves tokens `amount` from `sender` to `recipient`.\\r\\n     *\\r\\n     * This is internal function is equivalent to {transfer}, and can be used to\\r\\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\\r\\n     *\\r\\n     * Emits a {Transfer} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `sender` cannot be the zero address.\\r\\n     * - `recipient` cannot be the zero address.\\r\\n     * - `sender` must have a balance of at least `amount`.\\r\\n     */\\r\\n    function _transfer(address sender, address recipient, uint256 amount) internal virtual {\\r\\n        require(sender != address(0), \\"ERC20: transfer from the zero address\\");\\r\\n        require(recipient != address(0), \\"ERC20: transfer to the zero address\\");\\r\\n\\r\\n        _beforeTokenTransfer(sender, recipient, amount);\\r\\n\\r\\n        _balances[sender] = _balances[sender].sub(amount, \\"ERC20: transfer amount exceeds balance\\");\\r\\n        _balances[recipient] = _balances[recipient].add(amount);\\r\\n        emit Transfer(sender, recipient, amount);\\r\\n    }\\r\\n\\r\\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\\r\\n     * the total supply.\\r\\n     *\\r\\n     * Emits a {Transfer} event with `from` set to the zero address.\\r\\n     *\\r\\n     * Requirements\\r\\n     *\\r\\n     * - `to` cannot be the zero address.\\r\\n     */\\r\\n    function _mint(address account, uint256 amount) internal virtual {\\r\\n        require(account != address(0), \\"ERC20: mint to the zero address\\");\\r\\n\\r\\n        _beforeTokenTransfer(address(0), account, amount);\\r\\n\\r\\n        _totalSupply = _totalSupply.add(amount);\\r\\n        _balances[account] = _balances[account].add(amount);\\r\\n        emit Transfer(address(0), account, amount);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Destroys `amount` tokens from `account`, reducing the\\r\\n     * total supply.\\r\\n     *\\r\\n     * Emits a {Transfer} event with `to` set to the zero address.\\r\\n     *\\r\\n     * Requirements\\r\\n     *\\r\\n     * - `account` cannot be the zero address.\\r\\n     * - `account` must have at least `amount` tokens.\\r\\n     */\\r\\n    function _burn(address account, uint256 amount) internal virtual {\\r\\n        require(account != address(0), \\"ERC20: burn from the zero address\\");\\r\\n\\r\\n        _beforeTokenTransfer(account, address(0), amount);\\r\\n\\r\\n        _balances[account] = _balances[account].sub(amount, \\"ERC20: burn amount exceeds balance\\");\\r\\n        _totalSupply = _totalSupply.sub(amount);\\r\\n        emit Transfer(account, address(0), amount);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\\r\\n     *\\r\\n     * This internal function is equivalent to `approve`, and can be used to\\r\\n     * e.g. set automatic allowances for certain subsystems, etc.\\r\\n     *\\r\\n     * Emits an {Approval} event.\\r\\n     *\\r\\n     * Requirements:\\r\\n     *\\r\\n     * - `owner` cannot be the zero address.\\r\\n     * - `spender` cannot be the zero address.\\r\\n     */\\r\\n    function _approve(address owner, address spender, uint256 amount) internal virtual {\\r\\n        require(owner != address(0), \\"ERC20: approve from the zero address\\");\\r\\n        require(spender != address(0), \\"ERC20: approve to the zero address\\");\\r\\n\\r\\n        _allowances[owner][spender] = amount;\\r\\n        emit Approval(owner, spender, amount);\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Sets {decimals} to a value other than the default one of 18.\\r\\n     *\\r\\n     * WARNING: This function should only be called from the constructor. Most\\r\\n     * applications that interact with token contracts will not expect\\r\\n     * {decimals} to ever change, and may work incorrectly if it does.\\r\\n     */\\r\\n    function _setupDecimals(uint8 decimals_) internal {\\r\\n        _decimals = decimals_;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Hook that is called before any transfer of tokens. This includes\\r\\n     * minting and burning.\\r\\n     *\\r\\n     * Calling conditions:\\r\\n     *\\r\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\\r\\n     * will be to transferred to `to`.\\r\\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\\r\\n     * - when `to` is zero, `amount` of ``from``\'s tokens will be burned.\\r\\n     * - `from` and `to` are never both zero.\\r\\n     *\\r\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\r\\n     */\\r\\n    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual { }\\r\\n}\\r\\n\\r\\n/**\\r\\n * @title SafeERC20\\r\\n * @dev Wrappers around ERC20 operations that throw on failure (when the token\\r\\n * contract returns false). Tokens that return no value (and instead revert or\\r\\n * throw on failure) are also supported, non-reverting calls are assumed to be\\r\\n * successful.\\r\\n * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\\r\\n * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\\r\\n */\\r\\nlibrary SafeERC20 {\\r\\n    using SafeMath for uint256;\\r\\n    using Address for address;\\r\\n\\r\\n    function safeTransfer(IERC20 token, address to, uint256 value) internal {\\r\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));\\r\\n    }\\r\\n\\r\\n    function safeTransferFrom(IERC20 token, address from, address to, uint256 value) internal {\\r\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Deprecated. This function has issues similar to the ones found in\\r\\n     * {IERC20-approve}, and its usage is discouraged.\\r\\n     *\\r\\n     * Whenever possible, use {safeIncreaseAllowance} and\\r\\n     * {safeDecreaseAllowance} instead.\\r\\n     */\\r\\n    function safeApprove(IERC20 token, address spender, uint256 value) internal {\\r\\n        // safeApprove should only be called when setting an initial allowance,\\r\\n        // or when resetting it to zero. To increase and decrease it, use\\r\\n        // \'safeIncreaseAllowance\' and \'safeDecreaseAllowance\'\\r\\n        // solhint-disable-next-line max-line-length\\r\\n        require((value == 0) || (token.allowance(address(this), spender) == 0),\\r\\n            \\"SafeERC20: approve from non-zero to non-zero allowance\\"\\r\\n        );\\r\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));\\r\\n    }\\r\\n\\r\\n    function safeIncreaseAllowance(IERC20 token, address spender, uint256 value) internal {\\r\\n        uint256 newAllowance = token.allowance(address(this), spender).add(value);\\r\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\r\\n    }\\r\\n\\r\\n    function safeDecreaseAllowance(IERC20 token, address spender, uint256 value) internal {\\r\\n        uint256 newAllowance = token.allowance(address(this), spender).sub(value, \\"SafeERC20: decreased allowance below zero\\");\\r\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\\r\\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\\r\\n     * @param token The token targeted by the call.\\r\\n     * @param data The call data (encoded using abi.encode or one of its variants).\\r\\n     */\\r\\n    function _callOptionalReturn(IERC20 token, bytes memory data) private {\\r\\n        // We need to perform a low level call here, to bypass Solidity\'s return data size checking mechanism, since\\r\\n        // we\'re implementing it ourselves. We use {Address.functionCall} to perform this call, which verifies that\\r\\n        // the target address contains contract code and also asserts for success in the low-level call.\\r\\n\\r\\n        bytes memory returndata = address(token).functionCall(data, \\"SafeERC20: low-level call failed\\");\\r\\n        if (returndata.length > 0) { // Return data is optional\\r\\n            // solhint-disable-next-line max-line-length\\r\\n            require(abi.decode(returndata, (bool)), \\"SafeERC20: ERC20 operation did not succeed\\");\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\\r\\ninterface IsSB {\\r\\n    function index() external view returns ( uint );\\r\\n}\\r\\n\\r\\ncontract wsBASH is ERC20 {\\r\\n    using SafeERC20 for ERC20;\\r\\n    using Address for address;\\r\\n    using SafeMath for uint;\\r\\n\\r\\n    address public immutable sSB;\\r\\n\\r\\n    constructor( address _sSB ) ERC20( \'Wrapped sBASH\', \'wsBASH\' ) {\\r\\n        require( _sSB != address(0) );\\r\\n        sSB = _sSB;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n        @notice wrap sSB\\r\\n        @param _amount uint\\r\\n        @return uint\\r\\n     */\\r\\n    function wrap( uint _amount ) external returns ( uint ) {\\r\\n        IERC20( sSB ).transferFrom( msg.sender, address(this), _amount );\\r\\n        \\r\\n        uint value = sSBTowsSB( _amount );\\r\\n        _mint( msg.sender, value );\\r\\n        return value;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n        @notice unwrap sSB\\r\\n        @param _amount uint\\r\\n        @return uint\\r\\n     */\\r\\n    function unwrap( uint _amount ) external returns ( uint ) {\\r\\n        _burn( msg.sender, _amount );\\r\\n\\r\\n        uint value = wsSBTosSB( _amount );\\r\\n        IERC20( sSB ).transfer( msg.sender, value );\\r\\n        return value;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n        @notice converts wsSB amount to sSB\\r\\n        @param _amount uint\\r\\n        @return uint\\r\\n     */\\r\\n    function wsSBTosSB( uint _amount ) public view returns ( uint ) {\\r\\n        return _amount.mul( IsSB( sSB ).index() ).div( 10 ** decimals() );\\r\\n    }\\r\\n\\r\\n    /**\\r\\n        @notice converts sSB amount to wsSB\\r\\n        @param _amount uint\\r\\n        @return uint\\r\\n     */\\r\\n    function sSBTowsSB( uint _amount ) public view returns ( uint ) {\\r\\n        return _amount.mul( 10 ** decimals() ).div( IsSB( sSB ).index() );\\r\\n    }\\r\\n\\r\\n}"}},"settings":{"optimizer":{"enabled":true,"runs":200},"outputSelection":{"*":{"*":["abi","evm.bytecode","evm.deployedBytecode","evm.methodIdentifiers","metadata","devdoc","userdoc","storageLayout","evm.gasEstimates"],"":["ast"]}},"metadata":{"useLiteralContent":true}}}')}}]);
//# sourceMappingURL=93.51ff7831.chunk.js.map