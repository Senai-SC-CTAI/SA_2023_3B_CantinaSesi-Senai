package com.sa.moka.controller;
import com.sa.moka.model.Comida;
import com.sa.moka.repository.ComidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/comidas")
public class ComidaController {
    @Autowired
    private ComidaRepository ComidaRepository;

    @GetMapping
    public List<Comida> listarComida() {
        return ComidaRepository.findAll();
    }
    @PostMapping
    public Comida criarComida(@RequestBody Comida comida) {
        return ComidaRepository.save(comida);
    }

}
