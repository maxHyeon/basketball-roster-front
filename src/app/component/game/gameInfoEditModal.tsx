export function GameInfoEditModal() {
    const today = new Date();
    return (
        <>
            <dialog id="gameInfoEditModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold w-full mb-2">게임 정보 입력</h3>
                    <label className="form-control flex mb-2">
                        <div className="label">
                            <span className="label-text">게임명</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-2">
                        <div className="label">
                            <span className="label-text">장소</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-3xl mb-2">
                        <div className="label">
                            <span className="label-text">날짜</span>
                        </div>
                        <input type="date" className="input input-bordered w-full max-w-xs" />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">게임 타입</span>
                        </div>
                        <div className="divider divider-primary"></div>
                        <label className="label cursor-pointer">
                            <span className="label-text">자체전</span>
                            <input type="radio" name="radio-10" className="radio-sm checked:bg-blue-500" checked />
                            <span className="label-text">교류전</span>
                            <input type="radio" name="radio-10" className="radio-sm checked:bg-blue-500" checked />
                        </label>
                        <div className="divider divider-primary"></div>
                    </label>

                    <label className="form-control w-full max-w-xs mb-4">
                        <div className="label">
                            <span className="label-text">설명</span>
                            <span className="badge badge-info">Optional</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>

                    <button className="btn">저장</button>
                </div>
            </dialog>
        </>
    )
}