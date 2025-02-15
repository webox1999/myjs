 <script>
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
                    <h2 style="color: red; font-size: 24px; font-weight: bold;">🔥 ВАШИ ЛУЧШИЕ СКИДКИ – ТУТ! 🔥</h2>
                    <p style="font-size: 18px; margin-top: 10px;">Хотите экономить на каждом заказе? 💰</p>
                    <p style="font-size: 18px;">Зарегистрируйтесь прямо сейчас и получите:</p>
                    <ul style="text-align: left; display: inline-block; margin: 10px 0; font-size: 18px;">
                        <li>✅ <b style="color: green;">2% скидку</b> на все заказы!</li>
                        <li>✅ <b style="color: green;">Дополнительно 3%</b> на первый заказ!</li>
                        <li>✅ <b style="color: green;">Эксклюзивные акции</b> только для зарегистрированных!</li>
                    </ul>
                    <p style="font-size: 20px; font-weight: bold; color: red;">ИТОГО: <span style="color: green;">5% ВЫГОДЫ НА ПЕРВЫЙ ЗАКАЗ!</span></p>
                    <p style="font-size: 18px; margin-top: 10px;">Успейте, акция ограничена! ⏳</p>
                    <a href="javascript:void(0);" target="_self" onclick="Popup.open('getSignUpBox');" style="display: inline-block; margin-top: 15px; padding: 10px 15px; background: red; color: white; font-size: 16px; text-decoration: none; border-radius: 5px;">Войти</a>
                    <a id="register_btn" href="javascript:void(0);" onclick="Popup.open('getClientRegisterBox');" style="display: inline-block; margin-top: 15px; padding: 10px 15px; background: green; color: white; font-size: 16px; text-decoration: none; border-radius: 5px; margin-left: 10px;">Регистрация</a>
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
    </script>
