package com.kob.backend.config;

import org.springframework.context.annotation.Configuration;


import jakarta.servlet.Filter;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    @Order(Ordered.HIGHEST_PRECEDENCE)
    public Filter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();

        // 允许的请求域名，比如你前端地址是 http://localhost:3000
        config.addAllowedOriginPattern("*"); // 建议上线改为前端实际域名
        config.setAllowCredentials(true);    // 是否允许携带 cookie
        config.addAllowedHeader("*");        // 允许的请求头
        config.addAllowedMethod("*");        // 允许的请求方法：GET、POST、PUT、DELETE...

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config); // 拦截所有路径

        return new CorsFilter(source);
    }
}