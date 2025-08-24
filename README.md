# SCU E-course Enhancer

[简体中文](#简体中文) | [English](#english)

[![Greasy Fork Installs](https://img.shields.io/greasyfork/dt/547083?style=for-the-badge&logo=tampermonkey)](https://greasyfork.org/zh-CN/scripts/547083)
[![Version](https://img.shields.io/badge/version-2.1-blue?style=for-the-badge)](https://greasyfork.org/zh-CN/scripts/547083)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](https://github.com/ff66ccff/SCU-E-course-Enhancer/blob/main/LICENSE)
[![Language](https://img.shields.io/badge/language-JavaScript-yellow?style=for-the-badge)](https://github.com/ff66ccff/SCU-E-course-Enhancer)

---

## 简体中文

这是一个为**四川大学智慧教学平台**设计的油猴脚本，旨在提升在线课程的视频观看体验。

### ✨ 主要功能

*   **后台持续播放**
    *   **问题**: 当您切换到其他浏览器标签页时，课程视频会自动暂停。
    *   **解决**: 此功能强制浏览器认为页面始终处于活动状态，让视频在后台也能不间断播放。

*   **视频自动连播**
    *   **问题**: 每个视频播放结束后，需要手动点击“下一个学习内容”才能继续。
    *   **解决**: 脚本会监听视频播放结束事件，并自动为您点击下一集按钮，实现无缝连续播放。

*   **悬浮设置面板**
    *   **特点**: 提供一个简洁、可拖动的悬浮设置面板。
    *   **作用**: 您可以随时通过面板的开关，自由启用或禁用“后台播放”和“自动连播”功能，无需修改代码。

### 🚀 安装步骤

1.  **安装用户脚本管理器**
    *   您需要一个用户脚本管理器来运行此脚本。推荐使用 **Tampermonkey**。
    *   请根据您的浏览器选择并安装：
        *   [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
        *   [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)
        *   [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2.  **安装本脚本**
    *   点击下方的链接，Tampermonkey 将会自动弹出安装页面。
    *   **[➡️ 从 GreasyFork 安装](https://greasyfork.org/zh-CN/scripts/547083)**

### 📖 使用方法

1.  安装成功后，打开四川大学智慧教学平台的任意**视频播放页面**。
2.  在页面的右下角，您会看到一个红色的 **`脚本设置`** 按钮。
3.  点击该按钮，即可打开或关闭设置面板。
4.  在面板中，您可以根据需要打开或关闭各项功能。
    *   `后台持续播放` 的设置在刷新页面后生效。
    *   `视频自动连播` 的设置即时生效。

### 💬 反馈与贡献

如果您发现任何 Bug 或有功能建议，欢迎随时[提交一个 Issue](https://github.com/ff66ccff/SCU-E-course-Enhancer/issues)！

### 📄 许可证

本项目基于 [MIT License](https://github.com/ff66ccff/SCU-E-course-Enhancer/blob/main/LICENSE) 开源。

---

## English

This is a Tampermonkey script designed for the **Sichuan University (SCU) E-course platform** to enhance the video viewing experience for online courses.

### ✨ Features

*   **Background Play**
    *   **Problem**: The course video automatically pauses when you switch to another browser tab.
    *   **Solution**: This feature forces the browser to believe the page is always active, allowing the video to play continuously in the background.

*   **Auto-Next Video**
    *   **Problem**: You have to manually click the "Next" button after each video finishes.
    *   **Solution**: The script listens for the video's end event and automatically clicks the next button for you, enabling seamless, continuous playback.

*   **Floating Settings Panel**
    *   **Feature**: Provides a clean, draggable floating settings panel.
    *   **Purpose**: You can easily enable or disable the "Background Play" and "Auto-Next Video" features at any time via the panel's switches, without needing to edit any code.

### 🚀 Installation

1.  **Install a User Script Manager**
    *   You need a user script manager to run this script. **Tampermonkey** is highly recommended.
    *   Install it for your browser:
        *   [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
        *   [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)
        *   [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2.  **Install this Script**
    *   Click the link below, and Tampermonkey will automatically open an installation page.
    *   **[➡️ Install from GreasyFork](https://greasyfork.org/en/scripts/547083)**

### 📖 Usage

1.  After successful installation, navigate to any **video playback page** on the SCU E-course platform.
2.  In the bottom-right corner of the page, you will see a red button labeled **`脚本设置` (Script Settings)**.
3.  Click this button to open or close the settings panel.
4.  In the panel, you can toggle the features on or off as needed.
    *   The `Background Play` setting takes effect after refreshing the page.
    *   The `Auto-Next Video` setting takes effect immediately.

### 💬 Feedback & Contribution

If you find any bugs or have suggestions for new features, feel free to [open an Issue](https://github.com/ff66ccff/SCU-E-course-Enhancer/issues)!

### 📄 License

This project is licensed under the [MIT License](https://github.com/ff66ccff/SCU-E-course-Enhancer/blob/main/LICENSE).````
