describe("클릭 이벤트와 뷰 화면을 처리하는 클래스입니다.", () => {
    it("viewManager에 TextManager의 인스턴스가 잘 전달되었는지 확인합니다.", () => {
        const btnEl = document.createElement("button");
        const inpTxt = document.createElement("input");
        const viewerEl = document.createElement("strong");
        const textManager = null;

        // 유닛 테서트에서의 actual은 테스트 중인 함수 혹은 코드의 반환값을 의미하는 용어입니다.
        const actual = () => {
            new ViewManager(textManager, {
                inpTxt,
                btnEl,
                viewerEl,
            });
        };

        // toThrowError : 코드가 실제로 에러가 발생하고 있는지 검증합니다.
        expect(actual).toThrowError();
    });

    it("viewManager에 options가 제대로 전달되었는지 확인합니다.", () => {
        const btnEl = null;
        const inpTxt = null;
        const viewerEl = null;
        const textManager = new TextManager();

        // 유닛 테서트에서의 actual은 테스트 중인 함수 혹은 코드의 반환값을 의미하는 용어입니다.
        const actual = () => {
            new ViewManager(textManager, {
                inpTxt,
                btnEl,
                viewerEl,
            });
        };

        // toThrowError : 코드가 실제로 에러가 발생하고 있는지 검증합니다.
        expect(actual).toThrowError();
    });

    const textManager = new TextManager();
    const btnEl = document.createElement("button");
    const inpTxt = document.createElement("input");
    const viewerEl = document.createElement("strong");
    const viewManager = new ViewManager(textManager, {
        inpTxt,
        btnEl,
        viewerEl,
    });

    it("click 이벤트가 발생했을 경우 changeValue 함수가 잘 실행되는지 확인합니다", () => {
        // spyOn : 특정 객체의 함수를 감시합니다.
        spyOn(viewManager, "changeValue");
        btnEl.click();
        // toHaveBeenCalled : 특정 함수가 호출이 된 적이 있는지 판별합니다.
        expect(viewManager.changeValue).toHaveBeenCalled();
    });

    it("updateView 함수가 실행되었는지 확인합니다.", () => {
        spyOn(viewManager, "updateView");
        viewManager.changeValue();
        expect(viewManager.updateView).toHaveBeenCalled();
    });
});
