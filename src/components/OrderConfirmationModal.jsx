export default function OrderConfirmationModal() {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img src="/assets/images/icon-order-confirmed.svg" alt="Order Confirmed" />
                <h2>Order Confirmed</h2>
                <p>We hope you enjoy your food!</p>

                {/* Order Summary List */}

                <button>Start New Order</button>
            </div>
        </div>
    )
}
