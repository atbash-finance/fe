(this["webpackJsonp@scaffold-eth/react-app"]=this["webpackJsonp@scaffold-eth/react-app"]||[]).push([[46],{498:function(n){n.exports=JSON.parse('{"address":"0x7b83ac0F67F1c829459C226C5d8c66095c00b442","abi":[{"inputs":[{"internalType":"address","name":"_Bash","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"Bash","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"getKValue","outputs":[{"internalType":"uint256","name":"k_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"getTotalValue","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"markdown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"valuation","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"}],"transactionHash":"0xf7cd579bc4e91aa56b28103be7877d896199c7efffd305baa0d3d3052b7d0136","receipt":{"to":null,"from":"0x956769FC9Dae4ae9309990167937Ac6DeF306fBC","contractAddress":"0x7b83ac0F67F1c829459C226C5d8c66095c00b442","transactionIndex":156,"gasUsed":"857681","logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","blockHash":"0x19baad14a9f1a720596fda773d2dd33960ae7a8d6d6137e8e253da473e5ab338","transactionHash":"0xf7cd579bc4e91aa56b28103be7877d896199c7efffd305baa0d3d3052b7d0136","logs":[],"blockNumber":15084392,"cumulativeGasUsed":"17830760","status":1,"byzantium":true},"args":["0x5646077E2779a4e8607A99257bD76F627A262d86"],"numDeployments":1,"solcInputHash":"1ed1fada204c36c360193582a3c5764a","metadata":"{\\"compiler\\":{\\"version\\":\\"0.7.5+commit.eb77ed08\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_Bash\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"inputs\\":[],\\"name\\":\\"Bash\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_pair\\",\\"type\\":\\"address\\"}],\\"name\\":\\"getKValue\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"k_\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_pair\\",\\"type\\":\\"address\\"}],\\"name\\":\\"getTotalValue\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_value\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_pair\\",\\"type\\":\\"address\\"}],\\"name\\":\\"markdown\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_pair\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount_\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"valuation\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_value\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"contracts/BondingCalculator.sol\\":\\"ATBASHBondingCalculator\\"},\\"evmVersion\\":\\"istanbul\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\",\\"useLiteralContent\\":true},\\"optimizer\\":{\\"enabled\\":true,\\"runs\\":800},\\"remappings\\":[]},\\"sources\\":{\\"@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol\\":{\\"content\\":\\"pragma solidity >=0.5.0;\\\\n\\\\ninterface IUniswapV2Pair {\\\\n    event Approval(address indexed owner, address indexed spender, uint value);\\\\n    event Transfer(address indexed from, address indexed to, uint value);\\\\n\\\\n    function name() external pure returns (string memory);\\\\n    function symbol() external pure returns (string memory);\\\\n    function decimals() external pure returns (uint8);\\\\n    function totalSupply() external view returns (uint);\\\\n    function balanceOf(address owner) external view returns (uint);\\\\n    function allowance(address owner, address spender) external view returns (uint);\\\\n\\\\n    function approve(address spender, uint value) external returns (bool);\\\\n    function transfer(address to, uint value) external returns (bool);\\\\n    function transferFrom(address from, address to, uint value) external returns (bool);\\\\n\\\\n    function DOMAIN_SEPARATOR() external view returns (bytes32);\\\\n    function PERMIT_TYPEHASH() external pure returns (bytes32);\\\\n    function nonces(address owner) external view returns (uint);\\\\n\\\\n    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;\\\\n\\\\n    event Mint(address indexed sender, uint amount0, uint amount1);\\\\n    event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);\\\\n    event Swap(\\\\n        address indexed sender,\\\\n        uint amount0In,\\\\n        uint amount1In,\\\\n        uint amount0Out,\\\\n        uint amount1Out,\\\\n        address indexed to\\\\n    );\\\\n    event Sync(uint112 reserve0, uint112 reserve1);\\\\n\\\\n    function MINIMUM_LIQUIDITY() external pure returns (uint);\\\\n    function factory() external view returns (address);\\\\n    function token0() external view returns (address);\\\\n    function token1() external view returns (address);\\\\n    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);\\\\n    function price0CumulativeLast() external view returns (uint);\\\\n    function price1CumulativeLast() external view returns (uint);\\\\n    function kLast() external view returns (uint);\\\\n\\\\n    function mint(address to) external returns (uint liquidity);\\\\n    function burn(address to) external returns (uint amount0, uint amount1);\\\\n    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;\\\\n    function skim(address to) external;\\\\n    function sync() external;\\\\n\\\\n    function initialize(address, address) external;\\\\n}\\\\n\\",\\"keccak256\\":\\"0x7c9bc70e5996c763e02ff38905282bc24fb242b0ef2519a003b36824fc524a4b\\"},\\"contracts/BondingCalculator.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: AGPL-3.0-or-later\\\\npragma solidity 0.7.5;\\\\n\\\\nimport {IERC20} from \\\\\\"./interfaces/IERC20.sol\\\\\\";\\\\nimport \\\\\\"@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol\\\\\\";\\\\n\\\\nlibrary FullMath {\\\\n    function fullMul(uint256 x, uint256 y)\\\\n        private\\\\n        pure\\\\n        returns (uint256 l, uint256 h)\\\\n    {\\\\n        uint256 mm = mulmod(x, y, uint256(-1));\\\\n        l = x * y;\\\\n        h = mm - l;\\\\n        if (mm < l) h -= 1;\\\\n    }\\\\n\\\\n    function fullDiv(\\\\n        uint256 l,\\\\n        uint256 h,\\\\n        uint256 d\\\\n    ) private pure returns (uint256) {\\\\n        uint256 pow2 = d & -d;\\\\n        d /= pow2;\\\\n        l /= pow2;\\\\n        l += h * ((-pow2) / pow2 + 1);\\\\n        uint256 r = 1;\\\\n        r *= 2 - d * r;\\\\n        r *= 2 - d * r;\\\\n        r *= 2 - d * r;\\\\n        r *= 2 - d * r;\\\\n        r *= 2 - d * r;\\\\n        r *= 2 - d * r;\\\\n        r *= 2 - d * r;\\\\n        r *= 2 - d * r;\\\\n        return l * r;\\\\n    }\\\\n\\\\n    function mulDiv(\\\\n        uint256 x,\\\\n        uint256 y,\\\\n        uint256 d\\\\n    ) internal pure returns (uint256) {\\\\n        (uint256 l, uint256 h) = fullMul(x, y);\\\\n        uint256 mm = mulmod(x, y, d);\\\\n        if (mm > l) h -= 1;\\\\n        l -= mm;\\\\n        require(h < d, \\\\\\"FullMath::mulDiv: overflow\\\\\\");\\\\n        return fullDiv(l, h, d);\\\\n    }\\\\n}\\\\n\\\\nlibrary Babylonian {\\\\n    function sqrt(uint256 x) internal pure returns (uint256) {\\\\n        if (x == 0) return 0;\\\\n\\\\n        uint256 xx = x;\\\\n        uint256 r = 1;\\\\n        if (xx >= 0x100000000000000000000000000000000) {\\\\n            xx >>= 128;\\\\n            r <<= 64;\\\\n        }\\\\n        if (xx >= 0x10000000000000000) {\\\\n            xx >>= 64;\\\\n            r <<= 32;\\\\n        }\\\\n        if (xx >= 0x100000000) {\\\\n            xx >>= 32;\\\\n            r <<= 16;\\\\n        }\\\\n        if (xx >= 0x10000) {\\\\n            xx >>= 16;\\\\n            r <<= 8;\\\\n        }\\\\n        if (xx >= 0x100) {\\\\n            xx >>= 8;\\\\n            r <<= 4;\\\\n        }\\\\n        if (xx >= 0x10) {\\\\n            xx >>= 4;\\\\n            r <<= 2;\\\\n        }\\\\n        if (xx >= 0x8) {\\\\n            r <<= 1;\\\\n        }\\\\n        r = (r + x / r) >> 1;\\\\n        r = (r + x / r) >> 1;\\\\n        r = (r + x / r) >> 1;\\\\n        r = (r + x / r) >> 1;\\\\n        r = (r + x / r) >> 1;\\\\n        r = (r + x / r) >> 1;\\\\n        r = (r + x / r) >> 1; // Seven iterations should be enough\\\\n        uint256 r1 = x / r;\\\\n        return (r < r1 ? r : r1);\\\\n    }\\\\n}\\\\n\\\\nlibrary BitMath {\\\\n    function mostSignificantBit(uint256 x) internal pure returns (uint8 r) {\\\\n        require(x > 0, \\\\\\"BitMath::mostSignificantBit: zero\\\\\\");\\\\n\\\\n        if (x >= 0x100000000000000000000000000000000) {\\\\n            x >>= 128;\\\\n            r += 128;\\\\n        }\\\\n        if (x >= 0x10000000000000000) {\\\\n            x >>= 64;\\\\n            r += 64;\\\\n        }\\\\n        if (x >= 0x100000000) {\\\\n            x >>= 32;\\\\n            r += 32;\\\\n        }\\\\n        if (x >= 0x10000) {\\\\n            x >>= 16;\\\\n            r += 16;\\\\n        }\\\\n        if (x >= 0x100) {\\\\n            x >>= 8;\\\\n            r += 8;\\\\n        }\\\\n        if (x >= 0x10) {\\\\n            x >>= 4;\\\\n            r += 4;\\\\n        }\\\\n        if (x >= 0x4) {\\\\n            x >>= 2;\\\\n            r += 2;\\\\n        }\\\\n        if (x >= 0x2) r += 1;\\\\n    }\\\\n}\\\\n\\\\nlibrary FixedPoint {\\\\n    // range: [0, 2**112 - 1]\\\\n    // resolution: 1 / 2**112\\\\n    struct uq112x112 {\\\\n        uint224 _x;\\\\n    }\\\\n\\\\n    // range: [0, 2**144 - 1]\\\\n    // resolution: 1 / 2**112\\\\n    struct uq144x112 {\\\\n        uint256 _x;\\\\n    }\\\\n\\\\n    uint8 private constant RESOLUTION = 112;\\\\n    uint256 private constant Q112 = 0x10000000000000000000000000000;\\\\n    uint256 private constant Q224 =\\\\n        0x100000000000000000000000000000000000000000000000000000000;\\\\n    uint256 private constant LOWER_MASK = 0xffffffffffffffffffffffffffff; // decimal of UQ*x112 (lower 112 bits)\\\\n\\\\n    // decode a UQ112x112 into a uint112 by truncating after the radix point\\\\n    function decode(uq112x112 memory self) internal pure returns (uint112) {\\\\n        return uint112(self._x >> RESOLUTION);\\\\n    }\\\\n\\\\n    // decode a uq112x112 into a uint with 18 decimals of precision\\\\n    function decode112with18(uq112x112 memory self)\\\\n        internal\\\\n        pure\\\\n        returns (uint256)\\\\n    {\\\\n        return uint256(self._x) / 5192296858534827;\\\\n    }\\\\n\\\\n    function fraction(uint256 numerator, uint256 denominator)\\\\n        internal\\\\n        pure\\\\n        returns (uq112x112 memory)\\\\n    {\\\\n        require(denominator > 0, \\\\\\"FixedPoint::fraction: division by zero\\\\\\");\\\\n        if (numerator == 0) return FixedPoint.uq112x112(0);\\\\n\\\\n        if (numerator <= uint144(-1)) {\\\\n            uint256 result = (numerator << RESOLUTION) / denominator;\\\\n            require(result <= uint224(-1), \\\\\\"FixedPoint::fraction: overflow\\\\\\");\\\\n            return uq112x112(uint224(result));\\\\n        } else {\\\\n            uint256 result = FullMath.mulDiv(numerator, Q112, denominator);\\\\n            require(result <= uint224(-1), \\\\\\"FixedPoint::fraction: overflow\\\\\\");\\\\n            return uq112x112(uint224(result));\\\\n        }\\\\n    }\\\\n\\\\n    // square root of a UQ112x112\\\\n    // lossy between 0/1 and 40 bits\\\\n    function sqrt(uq112x112 memory self)\\\\n        internal\\\\n        pure\\\\n        returns (uq112x112 memory)\\\\n    {\\\\n        if (self._x <= uint144(-1)) {\\\\n            return uq112x112(uint224(Babylonian.sqrt(uint256(self._x) << 112)));\\\\n        }\\\\n\\\\n        uint8 safeShiftBits = 255 - BitMath.mostSignificantBit(self._x);\\\\n        safeShiftBits -= safeShiftBits % 2;\\\\n        return\\\\n            uq112x112(\\\\n                uint224(\\\\n                    Babylonian.sqrt(uint256(self._x) << safeShiftBits) <<\\\\n                        ((112 - safeShiftBits) / 2)\\\\n                )\\\\n            );\\\\n    }\\\\n}\\\\n\\\\nlibrary SafeMath {\\\\n    function add(uint256 a, uint256 b) internal pure returns (uint256) {\\\\n        uint256 c = a + b;\\\\n        require(c >= a, \\\\\\"SafeMath: addition overflow\\\\\\");\\\\n\\\\n        return c;\\\\n    }\\\\n\\\\n    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\\\\n        return sub(a, b, \\\\\\"SafeMath: subtraction overflow\\\\\\");\\\\n    }\\\\n\\\\n    function sub(\\\\n        uint256 a,\\\\n        uint256 b,\\\\n        string memory errorMessage\\\\n    ) internal pure returns (uint256) {\\\\n        require(b <= a, errorMessage);\\\\n        uint256 c = a - b;\\\\n\\\\n        return c;\\\\n    }\\\\n\\\\n    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\\\\n        if (a == 0) {\\\\n            return 0;\\\\n        }\\\\n\\\\n        uint256 c = a * b;\\\\n        require(c / a == b, \\\\\\"SafeMath: multiplication overflow\\\\\\");\\\\n\\\\n        return c;\\\\n    }\\\\n\\\\n    function div(uint256 a, uint256 b) internal pure returns (uint256) {\\\\n        return div(a, b, \\\\\\"SafeMath: division by zero\\\\\\");\\\\n    }\\\\n\\\\n    function div(\\\\n        uint256 a,\\\\n        uint256 b,\\\\n        string memory errorMessage\\\\n    ) internal pure returns (uint256) {\\\\n        require(b > 0, errorMessage);\\\\n        uint256 c = a / b;\\\\n        // assert(a == b * c + a % b); // There is no case in which this doesn\'t hold\\\\n\\\\n        return c;\\\\n    }\\\\n\\\\n    function sqrrt(uint256 a) internal pure returns (uint256 c) {\\\\n        if (a > 3) {\\\\n            c = a;\\\\n            uint256 b = add(div(a, 2), 1);\\\\n            while (b < c) {\\\\n                c = b;\\\\n                b = div(add(div(a, b), b), 2);\\\\n            }\\\\n        } else if (a != 0) {\\\\n            c = 1;\\\\n        }\\\\n    }\\\\n}\\\\n\\\\ninterface IUniswapV2ERC20 {\\\\n    function totalSupply() external view returns (uint256);\\\\n}\\\\n\\\\ninterface IBondingCalculator {\\\\n    function valuation(address pair_, uint256 amount_)\\\\n        external\\\\n        view\\\\n        returns (uint256 _value);\\\\n}\\\\n\\\\ncontract ATBASHBondingCalculator is IBondingCalculator {\\\\n    using FixedPoint for *;\\\\n    using SafeMath for uint256;\\\\n    using SafeMath for uint112;\\\\n\\\\n    address public immutable Bash;\\\\n\\\\n    constructor(address _Bash) {\\\\n        require(_Bash != address(0));\\\\n        Bash = _Bash;\\\\n    }\\\\n\\\\n    function getKValue(address _pair) public view returns (uint256 k_) {\\\\n        uint256 token0 = IERC20(IUniswapV2Pair(_pair).token0()).decimals();\\\\n        uint256 token1 = IERC20(IUniswapV2Pair(_pair).token1()).decimals();\\\\n        uint256 decimals = token0.add(token1).sub(IERC20(_pair).decimals());\\\\n\\\\n        (uint256 reserve0, uint256 reserve1, ) = IUniswapV2Pair(_pair)\\\\n            .getReserves();\\\\n        k_ = reserve0.mul(reserve1).div(10**decimals);\\\\n    }\\\\n\\\\n    function getTotalValue(address _pair) public view returns (uint256 _value) {\\\\n        _value = getKValue(_pair).sqrrt().mul(2);\\\\n    }\\\\n\\\\n    function valuation(address _pair, uint256 amount_)\\\\n        external\\\\n        view\\\\n        override\\\\n        returns (uint256 _value)\\\\n    {\\\\n        uint256 totalValue = getTotalValue(_pair);\\\\n        uint256 totalSupply = IUniswapV2Pair(_pair).totalSupply();\\\\n\\\\n        _value = totalValue\\\\n            .mul(FixedPoint.fraction(amount_, totalSupply).decode112with18())\\\\n            .div(1e18);\\\\n    }\\\\n\\\\n    function markdown(address _pair) external view returns (uint256) {\\\\n        (uint256 reserve0, uint256 reserve1, ) = IUniswapV2Pair(_pair)\\\\n            .getReserves();\\\\n        require(\\\\n            IUniswapV2Pair(_pair).token0() == Bash ||\\\\n                IUniswapV2Pair(_pair).token1() == Bash,\\\\n            \\\\\\"Pair missing Bash\\\\\\"\\\\n        );\\\\n\\\\n        uint256 reserve;\\\\n        if (IUniswapV2Pair(_pair).token0() == Bash) {\\\\n            reserve = reserve1;\\\\n        } else {\\\\n            reserve = reserve0;\\\\n        }\\\\n        return\\\\n            reserve.mul(2 * (10**IERC20(Bash).decimals())).div(getTotalValue(_pair));\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0xfc4a00a01ac6a97c921fc768a2719280457b726f3229522240508a95c9dc5bee\\",\\"license\\":\\"AGPL-3.0-or-later\\"},\\"contracts/interfaces/IERC20.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: AGPL-3.0-or-later\\\\npragma solidity 0.7.5;\\\\n\\\\ninterface IERC20 {\\\\n    /**\\\\n     * @dev Returns the decimals of the token.\\\\n     */\\\\n    function decimals() external view returns (uint8);\\\\n\\\\n    /**\\\\n     * @dev Returns the amount of tokens in existence.\\\\n     */\\\\n    function totalSupply() external view returns (uint256);\\\\n\\\\n    /**\\\\n     * @dev Returns the amount of tokens owned by `account`.\\\\n     */\\\\n    function balanceOf(address account) external view returns (uint256);\\\\n\\\\n    /**\\\\n     * @dev Moves `amount` tokens from the caller\'s account to `recipient`.\\\\n     *\\\\n     * Returns a boolean value indicating whether the operation succeeded.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function transfer(address recipient, uint256 amount)\\\\n        external\\\\n        returns (bool);\\\\n\\\\n    /**\\\\n     * @dev Returns the remaining number of tokens that `spender` will be\\\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\\\n     * zero by default.\\\\n     *\\\\n     * This value changes when {approve} or {transferFrom} are called.\\\\n     */\\\\n    function allowance(address owner, address spender)\\\\n        external\\\\n        view\\\\n        returns (uint256);\\\\n\\\\n    /**\\\\n     * @dev Sets `amount` as the allowance of `spender` over the caller\'s tokens.\\\\n     *\\\\n     * Returns a boolean value indicating whether the operation succeeded.\\\\n     *\\\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\\\n     * that someone may use both the old and the new allowance by unfortunate\\\\n     * transaction ordering. One possible solution to mitigate this race\\\\n     * condition is to first reduce the spender\'s allowance to 0 and set the\\\\n     * desired value afterwards:\\\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\\\n     *\\\\n     * Emits an {Approval} event.\\\\n     */\\\\n    function approve(address spender, uint256 amount) external returns (bool);\\\\n\\\\n    /**\\\\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\\\\n     * allowance mechanism. `amount` is then deducted from the caller\'s\\\\n     * allowance.\\\\n     *\\\\n     * Returns a boolean value indicating whether the operation succeeded.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function transferFrom(\\\\n        address sender,\\\\n        address recipient,\\\\n        uint256 amount\\\\n    ) external returns (bool);\\\\n\\\\n    /**\\\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\\\n     * another (`to`).\\\\n     *\\\\n     * Note that `value` may be zero.\\\\n     */\\\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\\\n\\\\n    /**\\\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\\\n     * a call to {approve}. `value` is the new allowance.\\\\n     */\\\\n    event Approval(\\\\n        address indexed owner,\\\\n        address indexed spender,\\\\n        uint256 value\\\\n    );\\\\n}\\\\n\\",\\"keccak256\\":\\"0xd9d90b53a116f03e32ade16bdc15c2c058d4164300adbb702fc045e97fce1635\\",\\"license\\":\\"AGPL-3.0-or-later\\"}},\\"version\\":1}","bytecode":"0x60a060405234801561001057600080fd5b50604051610f1d380380610f1d8339818101604052602081101561003357600080fd5b50516001600160a01b03811661004857600080fd5b606081901b6001600160601b0319166080526001600160a01b0316610e8f61008e600039806101e5528061026b5280610358528061040f52806104b55250610e8f6000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80634249719f116100505780634249719f146100c8578063490084ef146100f4578063686375491461011a57610067565b806332da80a31461006c5780633c4e6da7146100a4575b600080fd5b6100926004803603602081101561008257600080fd5b50356001600160a01b0316610140565b60408051918252519081900360200190f35b6100ac6104b3565b604080516001600160a01b039092168252519081900360200190f35b610092600480360360408110156100de57600080fd5b506001600160a01b0381351690602001356104d7565b6100926004803603602081101561010a57600080fd5b50356001600160a01b031661057f565b6100926004803603602081101561013057600080fd5b50356001600160a01b031661086c565b6000806000836001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561017e57600080fd5b505afa158015610192573d6000803e3d6000fd5b505050506040513d60608110156101a857600080fd5b50805160209182015160408051630dfe168160e01b815290516dffffffffffffffffffffffffffff93841696509290911693506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169390881692630dfe1681926004808201939291829003018186803b15801561022d57600080fd5b505afa158015610241573d6000803e3d6000fd5b505050506040513d602081101561025757600080fd5b50516001600160a01b0316148061030357507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156102cc57600080fd5b505afa1580156102e0573d6000803e3d6000fd5b505050506040513d60208110156102f657600080fd5b50516001600160a01b0316145b610354576040805162461bcd60e51b815260206004820152601160248201527f50616972206d697373696e672042617368000000000000000000000000000000604482015290519081900360640190fd5b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156103b957600080fd5b505afa1580156103cd573d6000803e3d6000fd5b505050506040513d60208110156103e357600080fd5b50516001600160a01b031614156103fb5750806103fe565b50815b6104a861040a8661086c565b6104a27f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561046657600080fd5b505afa15801561047a573d6000803e3d6000fd5b505050506040513d602081101561049057600080fd5b5051849060ff16600a0a600202610890565b906108f0565b93505050505b919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806104e38461086c565b90506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561052057600080fd5b505afa158015610534573d6000803e3d6000fd5b505050506040513d602081101561054a57600080fd5b50519050610576670de0b6b3a76400006104a261056f61056a8886610932565b610ab4565b8590610890565b95945050505050565b600080826001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156105bb57600080fd5b505afa1580156105cf573d6000803e3d6000fd5b505050506040513d60208110156105e557600080fd5b50516040805163313ce56760e01b815290516001600160a01b039092169163313ce56791600480820192602092909190829003018186803b15801561062957600080fd5b505afa15801561063d573d6000803e3d6000fd5b505050506040513d602081101561065357600080fd5b50516040805163d21220a760e01b8152905160ff90921692506000916001600160a01b0386169163d21220a7916004808301926020929190829003018186803b15801561069f57600080fd5b505afa1580156106b3573d6000803e3d6000fd5b505050506040513d60208110156106c957600080fd5b50516040805163313ce56760e01b815290516001600160a01b039092169163313ce56791600480820192602092909190829003018186803b15801561070d57600080fd5b505afa158015610721573d6000803e3d6000fd5b505050506040513d602081101561073757600080fd5b50516040805163313ce56760e01b8152905160ff90921692506000916107c7916001600160a01b0388169163313ce56791600480820192602092909190829003018186803b15801561078857600080fd5b505afa15801561079c573d6000803e3d6000fd5b505050506040513d60208110156107b257600080fd5b505160ff166107c18585610acc565b90610b26565b9050600080866001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561080557600080fd5b505afa158015610819573d6000803e3d6000fd5b505050506040513d606081101561082f57600080fd5b5080516020909101516dffffffffffffffffffffffffffff9182169350169050610861600a84900a6104a28484610890565b979650505050505050565b600061088a600261088461087f8561057f565b610b68565b90610890565b92915050565b60008261089f5750600061088a565b828202828482816108ac57fe5b04146108e95760405162461bcd60e51b8152600401808060200182810382526021815260200180610e396021913960400191505060405180910390fd5b9392505050565b60006108e983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610bd2565b61093a610e00565b600082116109795760405162461bcd60e51b8152600401808060200182810382526026815260200180610e136026913960400191505060405180910390fd5b82610993575060408051602081019091526000815261088a565b71ffffffffffffffffffffffffffffffffffff8311610a3a57600082607085901b816109bb57fe5b0490506001600160e01b03811115610a1a576040805162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015290519081900360640190fd5b6040518060200160405280826001600160e01b031681525091505061088a565b6000610a56846e01000000000000000000000000000085610c74565b90506001600160e01b03811115610a1a576040805162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015290519081900360640190fd5b516612725dd1d243ab6001600160e01b039091160490565b6000828201838110156108e9576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60006108e983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610d09565b60006003821115610bc45750806000610b8c610b858360026108f0565b6001610acc565b90505b81811015610bbe57809150610bb7610bb0610baa85846108f0565b83610acc565b60026108f0565b9050610b8f565b506104ae565b81156104ae57506001919050565b60008183610c5e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c23578181015183820152602001610c0b565b50505050905090810190601f168015610c505780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610c6a57fe5b0495945050505050565b6000806000610c838686610d63565b9150915060008480610c9157fe5b868809905082811115610ca5576001820391505b8083039250848210610cfe576040805162461bcd60e51b815260206004820152601a60248201527f46756c6c4d6174683a3a6d756c4469763a206f766572666c6f77000000000000604482015290519081900360640190fd5b610861838387610d90565b60008184841115610d5b5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610c23578181015183820152602001610c0b565b505050900390565b6000808060001984860990508385029250828103915082811015610d88576001820391505b509250929050565b60008181038216808381610da057fe5b049250808581610dac57fe5b049450808160000381610dbb57fe5b60028581038087028203028087028203028087028203028087028203028087028203028087028203029586029003909402930460010193909302939093010292915050565b6040805160208101909152600081529056fe4669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206279207a65726f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a264697066735822122041615b508bea8c397749bfdc0ed362fcdceb0f08c4cbc399bab6f018fffc0d0a64736f6c63430007050033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100675760003560e01c80634249719f116100505780634249719f146100c8578063490084ef146100f4578063686375491461011a57610067565b806332da80a31461006c5780633c4e6da7146100a4575b600080fd5b6100926004803603602081101561008257600080fd5b50356001600160a01b0316610140565b60408051918252519081900360200190f35b6100ac6104b3565b604080516001600160a01b039092168252519081900360200190f35b610092600480360360408110156100de57600080fd5b506001600160a01b0381351690602001356104d7565b6100926004803603602081101561010a57600080fd5b50356001600160a01b031661057f565b6100926004803603602081101561013057600080fd5b50356001600160a01b031661086c565b6000806000836001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561017e57600080fd5b505afa158015610192573d6000803e3d6000fd5b505050506040513d60608110156101a857600080fd5b50805160209182015160408051630dfe168160e01b815290516dffffffffffffffffffffffffffff93841696509290911693506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169390881692630dfe1681926004808201939291829003018186803b15801561022d57600080fd5b505afa158015610241573d6000803e3d6000fd5b505050506040513d602081101561025757600080fd5b50516001600160a01b0316148061030357507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156102cc57600080fd5b505afa1580156102e0573d6000803e3d6000fd5b505050506040513d60208110156102f657600080fd5b50516001600160a01b0316145b610354576040805162461bcd60e51b815260206004820152601160248201527f50616972206d697373696e672042617368000000000000000000000000000000604482015290519081900360640190fd5b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156103b957600080fd5b505afa1580156103cd573d6000803e3d6000fd5b505050506040513d60208110156103e357600080fd5b50516001600160a01b031614156103fb5750806103fe565b50815b6104a861040a8661086c565b6104a27f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561046657600080fd5b505afa15801561047a573d6000803e3d6000fd5b505050506040513d602081101561049057600080fd5b5051849060ff16600a0a600202610890565b906108f0565b93505050505b919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806104e38461086c565b90506000846001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561052057600080fd5b505afa158015610534573d6000803e3d6000fd5b505050506040513d602081101561054a57600080fd5b50519050610576670de0b6b3a76400006104a261056f61056a8886610932565b610ab4565b8590610890565b95945050505050565b600080826001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156105bb57600080fd5b505afa1580156105cf573d6000803e3d6000fd5b505050506040513d60208110156105e557600080fd5b50516040805163313ce56760e01b815290516001600160a01b039092169163313ce56791600480820192602092909190829003018186803b15801561062957600080fd5b505afa15801561063d573d6000803e3d6000fd5b505050506040513d602081101561065357600080fd5b50516040805163d21220a760e01b8152905160ff90921692506000916001600160a01b0386169163d21220a7916004808301926020929190829003018186803b15801561069f57600080fd5b505afa1580156106b3573d6000803e3d6000fd5b505050506040513d60208110156106c957600080fd5b50516040805163313ce56760e01b815290516001600160a01b039092169163313ce56791600480820192602092909190829003018186803b15801561070d57600080fd5b505afa158015610721573d6000803e3d6000fd5b505050506040513d602081101561073757600080fd5b50516040805163313ce56760e01b8152905160ff90921692506000916107c7916001600160a01b0388169163313ce56791600480820192602092909190829003018186803b15801561078857600080fd5b505afa15801561079c573d6000803e3d6000fd5b505050506040513d60208110156107b257600080fd5b505160ff166107c18585610acc565b90610b26565b9050600080866001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561080557600080fd5b505afa158015610819573d6000803e3d6000fd5b505050506040513d606081101561082f57600080fd5b5080516020909101516dffffffffffffffffffffffffffff9182169350169050610861600a84900a6104a28484610890565b979650505050505050565b600061088a600261088461087f8561057f565b610b68565b90610890565b92915050565b60008261089f5750600061088a565b828202828482816108ac57fe5b04146108e95760405162461bcd60e51b8152600401808060200182810382526021815260200180610e396021913960400191505060405180910390fd5b9392505050565b60006108e983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610bd2565b61093a610e00565b600082116109795760405162461bcd60e51b8152600401808060200182810382526026815260200180610e136026913960400191505060405180910390fd5b82610993575060408051602081019091526000815261088a565b71ffffffffffffffffffffffffffffffffffff8311610a3a57600082607085901b816109bb57fe5b0490506001600160e01b03811115610a1a576040805162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015290519081900360640190fd5b6040518060200160405280826001600160e01b031681525091505061088a565b6000610a56846e01000000000000000000000000000085610c74565b90506001600160e01b03811115610a1a576040805162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015290519081900360640190fd5b516612725dd1d243ab6001600160e01b039091160490565b6000828201838110156108e9576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60006108e983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610d09565b60006003821115610bc45750806000610b8c610b858360026108f0565b6001610acc565b90505b81811015610bbe57809150610bb7610bb0610baa85846108f0565b83610acc565b60026108f0565b9050610b8f565b506104ae565b81156104ae57506001919050565b60008183610c5e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c23578181015183820152602001610c0b565b50505050905090810190601f168015610c505780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610c6a57fe5b0495945050505050565b6000806000610c838686610d63565b9150915060008480610c9157fe5b868809905082811115610ca5576001820391505b8083039250848210610cfe576040805162461bcd60e51b815260206004820152601a60248201527f46756c6c4d6174683a3a6d756c4469763a206f766572666c6f77000000000000604482015290519081900360640190fd5b610861838387610d90565b60008184841115610d5b5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610c23578181015183820152602001610c0b565b505050900390565b6000808060001984860990508385029250828103915082811015610d88576001820391505b509250929050565b60008181038216808381610da057fe5b049250808581610dac57fe5b049450808160000381610dbb57fe5b60028581038087028203028087028203028087028203028087028203028087028203028087028203029586029003909402930460010193909302939093010292915050565b6040805160208101909152600081529056fe4669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206279207a65726f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a264697066735822122041615b508bea8c397749bfdc0ed362fcdceb0f08c4cbc399bab6f018fffc0d0a64736f6c63430007050033","devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1},"storageLayout":{"storage":[],"types":null}}')}}]);
//# sourceMappingURL=46.a48a27c8.chunk.js.map