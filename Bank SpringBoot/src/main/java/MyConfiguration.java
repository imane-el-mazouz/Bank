import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyConfiguration {

//  @Bean
//  public CorsFilter corsFilter() {
//    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//
//    CorsConfiguration config = new CorsConfiguration();
//    config.setAllowCredentials(true);
//    config.addAllowedOrigin("http://localhost:4200");
//    config.addAllowedHeader("*");
//    config.addAllowedMethod("*");
//    source.registerCorsConfiguration("/api/users/**", config);
//    source.registerCorsConfiguration("/api/account/**", config);
//    source.registerCorsConfiguration("/api/auth/**", config);
//    source.registerCorsConfiguration("/api/auth/login", config);
//
//    return new CorsFilter(source);
//  }

    @Bean
    public CorsFilter corsFilter() {
      UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
      CorsConfiguration config = new CorsConfiguration();
      config.setAllowCredentials(true);
      config.addAllowedOrigin("http://localhost:4200");
      config.addAllowedHeader("*");
      config.addAllowedMethod("*");
      source.registerCorsConfiguration("/**", config);
      return new CorsFilter(source);
    }
  }



//  public void addCorsMappings(CorsRegistry registry) {
//    registry.addMapping("/api/**")
//      .allowedOrigins("http://localhost:4200")
//      .allowedMethods("GET", "POST", "PUT", "DELETE")
//      .allowedHeaders("*")
//      .allowCredentials(true);
//  }

