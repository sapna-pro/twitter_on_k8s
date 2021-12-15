package edu.sa.web;

import edu.sa.web.dto.SentenceDto;
import edu.sa.web.dto.SentimentDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "*")
@RestController
public class SentimentController {
    @Value("${sa.logic.api.url}")
    private String saLogicApiUrl;

    @PostMapping("/sentiment")
    public SentimentDto sentimentAnalysis(@RequestBody SentenceDto sentenceDto) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(saLogicApiUrl + "/analyse/sentiment", sentenceDto, SentimentDto.class)
                .getBody();
    }

    @GetMapping("/testHealth")
    public String testHealth() {
        return "Here at TestHealth Springboot App Sentiment Analysis!";
    }

    @GetMapping("/testComms")
    public String testComms() {
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<String> result = restTemplate.getForEntity(saLogicApiUrl + "/testHealth", String.class);
        return result.getBody();
    }

    @GetMapping("/testSentiment")
    public String testSentimentGet() {
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<String> result = restTemplate.getForEntity(saLogicApiUrl + "/analyse?sentence=i+am+so+happy!",
                String.class);
        return result.getBody();
    }
}
