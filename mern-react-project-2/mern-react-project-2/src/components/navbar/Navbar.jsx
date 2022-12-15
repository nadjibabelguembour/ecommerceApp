import Classes from './Navbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartButton from './ShoppingCartButton';

const Navbar = ({onOpenModal}) => {
  return (
    <div className={Classes.container}>
      <div className={Classes.wrapper}>
        <div className={Classes.right}>
          <span className={Classes.lang}>EN</span>
          <div className={Classes["search_container"]}>
            <input type="text" className={Classes.input} placeholder="البحث" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className={Classes.center}>
          <h1 className={Classes.logo}>متجري</h1>
        </div>
        <div className={Classes.left}>
          <div className={Classes["menu_item"]}>التسجيل</div>
          <div className={Classes["menu_item"]}>الدخول</div>
          <div onClick={onOpenModal} className={Classes["menu_item"]}>
            <ShoppingCartButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
