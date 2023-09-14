import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet,
    useParams,
    useNavigate,
} from "react-router-dom";

function Quiz() {
    return (
        <BrowserRouter>
            {/* a태그는 새로고침이 일어납니다. */}
            <a href="/users">A태그로 유저 창 이동</a>

            <br />
            <br />

            {/* Link는 새로고침이 일어나지 않습니다. */}
            <Link to="/"> Homepage </Link>
            <Link to="/products/"> Products </Link>
            <Link to="/cart"> Cart </Link>
            <Link to="/users"> Users </Link>

            <br />
            <br />

            {/* useNavigate : 로직에 의해 화면전환이 일어나야할 때 */}
            <Btn />

            {/* 라우트를 감싸줍니다. */}
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products/*" element={<Outlet />}>
                    <Route path="" element={<Products />} />
                    <Route path=":id/" element={<Outlet />}>
                        <Route path="" element={<ProductDetailPage />} />
                        <Route
                            path="notice/"
                            element={<ProductDetailNoticePage />}
                        />
                    </Route>
                </Route>
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/users/*" element={<Outlet />}> */}
                <Route path="/users/*" element={<Users />}>
                    {/* <Route path="" element={<Users />} /> */}
                    <Route path="coupon/" element={<CouponPage />} />
                    <Route path="question/" element={<QuestionPage />} />
                    <Route path="notice/" element={<NoticePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function Index() {
    return (
        <>
            <h1>Homepage</h1>
            <p>안녕하세요!</p>
        </>
    );
}

function Cart() {
    return (
        <>
            <h1>Cart page</h1>
            <p>장바구니 입니다.</p>
        </>
    );
}

function Users() {
    return (
        <>
            <h1>Users page</h1>
            <div>
                <Link to="/users/coupon/"> Coupon </Link> <br />
                <Link to="/users/question/"> Question </Link>
                <br />
                <Link to="/users/notice/"> Notice </Link>
            </div>
            <Outlet />
        </>
    );
}

function CouponPage() {
    return (
        <>
            <h2>Coupon 페이지 입니다.</h2>
            <p>쿠폰을 관리할 수 있습니다..</p>
        </>
    );
}
function QuestionPage() {
    return (
        <>
            <h2>Question 페이지입니다.</h2>
            <p>문의사항 / 건의사항이 있으시다면 아래와 같은.. </p>
        </>
    );
}
function NoticePage() {
    return (
        <>
            <h2>사용자 페이지입니다.</h2>
        </>
    );
}

function Products() {
    return (
        <>
            <h1>Products Page</h1>
            <p>
                주소창에 원하는 상품의 번호를 추가하여 <br />
                원하는 상품 페이지로 들어가보세요. <br />
                ex) ...products/1
            </p>
            <Outlet />
        </>
    );
}

function ProductDetailPage() {
    const { id } = useParams();
    return (
        <>
            <h1>{id}번째 상품입니다.</h1>
            <p>
                주소창에 '/notice'를 추가하시면 상세페이지로 넘어갑니다.
                <br />
                ex) ...products/{id}/notice
            </p>
        </>
    );
}

function ProductDetailNoticePage() {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <h1>{id}번째 상품</h1>
            <p>{id}번째 상품의 상세 페이지입니다.</p>
        </>
    );
}

function Btn() {
    const navigate = useNavigate();
    return <button onClick={() => navigate("/")}>홈으로 이동</button>;
}

export default Quiz;
