document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        let popupBg = document.createElement("div"),
            popup = document.createElement("div"),
            closeBtn = document.createElement("button");

        Object.assign(popupBg.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "9999"
        });

        Object.assign(popup.style, {
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            textAlign: "center",
            width: "300px",
            opacity: "0",
            transform: "scale(0.9)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out"
        });

        closeBtn.innerHTML = "&times;";
        Object.assign(closeBtn.style, {
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer"
        });

        popup.innerHTML = `
            <h2 style="color: red; font-size: 22px;">🔥 Спешите! 🔥</h2>
            <p style="font-size: 18px;">Зарегистрируйтесь и получите <b style="color: green;">2%</b> скидку!</p>
            <p style="font-size: 18px;">А на первый заказ еще <b style="color: green;">3%</b>! 🎉</p>
            <p style="font-size: 20px; font-weight: bold; color: red;">Итого: <span style="color: green;">5% скидки!</span></p>
            <a href="/register" style="display: inline-block; margin-top: 10px; padding: 10px 15px; background: red; color: white; font-size: 16px; text-decoration: none; border-radius: 5px;">Зарегистрироваться</a>
        `;

        popup.appendChild(closeBtn);
        popupBg.appendChild(popup);
        document.body.appendChild(popupBg);

        setTimeout(() => {
            popup.style.opacity = "1";
            popup.style.transform = "scale(1)";
        }, 50);

        closeBtn.onclick = popupBg.onclick = (e) => {
            if (e.target === popupBg || e.target === closeBtn) {
                popupBg.remove();
            }
        };
    }, 3000);
});
