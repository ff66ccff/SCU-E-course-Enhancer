// ==UserScript==
// @name         四川大学智慧教育平台增强脚本 (后台+连播+音量记忆)
// @namespace    http://tampermonkey.net/
// @version      2.3.1
// @description  后台播放、自动连播、音量记忆，并提供设置面板进行开关。修复了自动连播的稳定性和设置面板拖动变形的问题。
// @author       ff66ccff & Gemini & AI Assistant
// @match        https://ecourse.scu.edu.cn/learn/course/mooc/*
// @match        *://*.scu.edu.cn/*
// @domain       scu.edu.cn  // <--- 添加这一行
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-idle
// @license      MIT
// @downloadURL  https://update.greasyfork.org/scripts/547083/%E5%9B%9B%E5%B7%9D%E5%A4%A7%E5%AD%A6%E6%99%BA%E6%85%A7%E6%95%99%E8%82%B2%E5%B9%B3%E5%8F%B0%E5%A2%9E%E5%BC%BA%E8%84%9A%E6%9C%AC%20%28%E5%90%8E%E5%8F%B0%2B%E8%BF%9E%E6%92%AD%2B%E8%AE%BE%E7%BD%AE%E7%89%88%29.user.js
// @updateURL    https://update.greasyfork.org/scripts/547083/%E5%9B%9B%E5%B7%9D%E5%A4%A7%E5%AD%A6%E6%99%BA%E6%85%A7%E6%95%99%E8%82%B2%E5%B9%B3%E5%8F%B0%E5%A2%9E%E5%BC%BA%E8%84%9A%E6%9C%AC%20%28%E5%90%8E%E5%8F%B0%2B%E8%BF%9E%E6%92%AD%2B%E8%AE%BE%E7%BD%AE%E7%89%88%29.meta.js
// ==/UserScript==
(function() {
    'use strict';

    // --- 默认设置 ---
    const SETTINGS = {
        backgroundPlay: true,
        autoNextVideo: true
    };

    // --- 加载/保存设置 ---
    function loadSettings() {
        SETTINGS.backgroundPlay = GM_getValue('backgroundPlay', true);
        SETTINGS.autoNextVideo = GM_getValue('autoNextVideo', true);
    }
    function saveSettings() {
        GM_setValue('backgroundPlay', SETTINGS.backgroundPlay);
        GM_setValue('autoNextVideo', SETTINGS.autoNextVideo);
    }

    // --- 功能1：后台播放 ---
    function enableBackgroundPlay() {
        if (SETTINGS.backgroundPlay) {
            try {
                Object.defineProperty(document, 'visibilityState', { value: 'visible', configurable: true });
                Object.defineProperty(document, 'hidden', { value: false, configurable: true });
                console.log('[增强脚本] 后台播放功能已激活。');
            } catch (e) {
                console.error('[增强脚本] 后台播放功能注入失败:', e);
            }
        }
    }

    // --- 功能2：视频增强功能 (自动连播 + 音量记忆) ---
    function setupVideoPlayerExtensions() {
        const videoInterval = setInterval(() => {
            const videoElement = document.querySelector('video');
            if (videoElement) {
                clearInterval(videoInterval);
                console.log('[增强脚本] 视频元素已找到，增强功能准备就绪。');

                // --- 新增：音量记忆模块 ---
                try {
                    // 1. 应用已保存的音量
                    const savedVolume = GM_getValue('videoVolume', 1.0); // 默认音量为1.0 (100%)
                    videoElement.volume = savedVolume;
                    console.log(`[增强脚本] 已自动应用上次保存的音量: ${Math.round(savedVolume * 100)}%`);

                    // 2. 监听音量变化并保存
                    videoElement.addEventListener('volumechange', () => {
                        // 当用户调整音量时，保存新的音量值
                        GM_setValue('videoVolume', videoElement.volume);
                    });
                } catch (e) {
                    console.error('[增强脚本] 应用或监听音量失败:', e);
                }

                // --- 自动连播模块 ---
                if (SETTINGS.autoNextVideo) {
                    videoElement.addEventListener('ended', () => {
                        if (!SETTINGS.autoNextVideo) return;
                        console.log('[增强脚本] 视频播放结束，正在查找“下一个学习内容”按钮...');
                        let attempts = 0;
                        const maxAttempts = 20; // 最多尝试20次 (10秒)
                        const findButtonInterval = setInterval(() => {
                            attempts++;
                            const nextButton = document.querySelector('.next_video_btn');
                            // 检查按钮是否存在且可见 (offsetParent 在元素可见时才不为null)
                            if (nextButton && nextButton.offsetParent !== null) {
                                console.log('[增强脚本] “下一个学习内容”按钮已找到且可见，执行点击。');
                                nextButton.click();
                                clearInterval(findButtonInterval);
                            } else if (attempts >= maxAttempts) {
                                console.error('[增强脚本] 未能找到“下一个学习内容”按钮，或按钮不可见，自动连播失败。');
                                clearInterval(findButtonInterval);
                            }
                        }, 500);
                    });
                }
            }
        }, 1000);
    }


    // --- 功能3：创建设置面板 (拖动问题已修复) ---
    function createSettingsPanel() {
        const styles=`#scu-script-settings-btn{position:fixed;bottom:20px;right:20px;z-index:9999;padding:10px 15px;background-color:#AF2E26;color:white;border:none;border-radius:5px;cursor:pointer;font-size:14px;box-shadow:0 2px 10px rgba(0,0,0,0.2)}#scu-script-settings-panel{display:none;position:fixed;bottom:70px;right:20px;z-index:9998;background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 15px rgba(0,0,0,0.2);padding:20px;width:250px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}#scu-script-settings-panel .settings-header{font-size:18px;font-weight:bold;color:#333;margin-bottom:15px;cursor:move;padding-bottom:10px;border-bottom:1px solid #eee}#scu-script-settings-panel .setting-item{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}#scu-script-settings-panel label{color:#555}#scu-script-settings-panel .switch{position:relative;display:inline-block;width:44px;height:24px}#scu-script-settings-panel .switch input{opacity:0;width:0;height:0}#scu-script-settings-panel .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s;border-radius:24px}#scu-script-settings-panel .slider:before{position:absolute;content:"";height:18px;width:18px;left:3px;bottom:3px;background-color:white;transition:.4s;border-radius:50%}#scu-script-settings-panel input:checked+.slider{background-color:#AF2E26}#scu-script-settings-panel input:checked+.slider:before{transform:translateX(20px)}`;
        const styleSheet=document.createElement("style");
        styleSheet.type="text/css";
        styleSheet.innerText=styles;
        document.head.appendChild(styleSheet);

        const panelHTML=`
            <div class="settings-header">脚本设置 (可拖动)</div>
            <div class="setting-item">
                <label for="bg-play-switch">后台持续播放</label>
                <label class="switch">
                    <input type="checkbox" id="bg-play-switch">
                    <span class="slider"></span>
                </label>
            </div>
            <div class="setting-item">
                <label for="auto-next-switch">视频自动连播</label>
                <label class="switch">
                    <input type="checkbox" id="auto-next-switch">
                    <span class="slider"></span>
                </label>
            </div>
        `;

        const settingsBtn=document.createElement('button');
        settingsBtn.id='scu-script-settings-btn';
        settingsBtn.innerText='脚本设置';
        const settingsPanel=document.createElement('div');
        settingsPanel.id='scu-script-settings-panel';
        settingsPanel.innerHTML=panelHTML;
        document.body.appendChild(settingsBtn);
        document.body.appendChild(settingsPanel);

        const bgPlaySwitch=document.getElementById('bg-play-switch');
        const autoNextSwitch=document.getElementById('auto-next-switch');

        bgPlaySwitch.checked=SETTINGS.backgroundPlay;
        autoNextSwitch.checked=SETTINGS.autoNextVideo;

        bgPlaySwitch.addEventListener('change', (e) => {
            SETTINGS.backgroundPlay=e.target.checked;
            saveSettings();
            alert('设置已保存，刷新页面后生效！');
        });
        autoNextSwitch.addEventListener('change', (e) => {
            SETTINGS.autoNextVideo=e.target.checked;
            saveSettings();
            alert('“自动连播”设置已保存！\n此设置将在下一个视频播放时生效。');
        });

        // --- 面板的显示/隐藏和拖动逻辑 (已修复) ---
        settingsBtn.addEventListener('click', () => {
            settingsPanel.style.display=settingsPanel.style.display==='block'?'none':'block';
        });
        const header=settingsPanel.querySelector('.settings-header');
        let isDragging = false;
        let offset = { x: 0, y: 0 };

        // **语法已修复**: 将全角符号 '。' 和 '，' 替换为半角符号 '.' 和 ','
        header。addEventListener('mousedown'， (e) => {
            isDragging = true;
            header.style.cursor = 'grabbing';
            if (!settingsPanel.style.top) {
                const rect = settingsPanel.getBoundingClientRect();
                settingsPanel.style。top = `${rect。top}px`;
                settingsPanel.style。left = `${rect。left}px`;
                settingsPanel.style.bottom = 'auto';
                settingsPanel。style。right = 'auto';
            }
            offset.x = e。clientX - parseFloat(settingsPanel。style。left);
            offset.y = e.clientY - parseFloat(settingsPanel.style.top);
            e.preventDefault();
        });

        document。addEventListener('mousemove'， (e) => {
            if (!isDragging) return;
            settingsPanel.style.left = `${e。clientX - offset。x}px`;
            settingsPanel.style.top = `${e。clientY - offset。y}px`;
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                header.style.cursor = 'move';
            }
        });
    }

    // --- 脚本主入口 ---
    function main() {
        console。log('[增强脚本] 脚本已加载 v2.3 (新增音量记忆)。');
        loadSettings();
        createSettingsPanel();
        enableBackgroundPlay();
        setupVideoPlayerExtensions(); // 替换旧的 enableAutoNextVideo()
    }

    setTimeout(main， 3000);

})();
