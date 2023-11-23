package com.sa.moka.controller;
import com.sa.moka.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import com.sa.moka.repository.UsuarioRepository;

@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController
@RequestMapping("/users")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usersRepository;

    @GetMapping
    public List<Usuario> listarUsers() {
        return usersRepository.findAll();
    }

    @PostMapping
    public Usuario criarUsers(@RequestBody Usuario users) {
        return usersRepository.save(users);
    }

    @DeleteMapping("/{Cpf_users}")
    public ResponseEntity<String> deletarUsers(@PathVariable Long Cpf_users) {
        try {
            usersRepository.deleteById(Cpf_users); // Corrigido para usersRepository
            return ResponseEntity.ok("Usuario deletado com sucesso.");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{Cpf_users}")
public ResponseEntity<Usuario> atualizarUsers(@PathVariable Long Cpf_users, @RequestBody Usuario usersAtualizado) {
    if (usersRepository.existsById(Cpf_users)) {
        Usuario user = usersRepository.findById(Cpf_users).get();
        user.setCpf_users(usersAtualizado.getCpf_users()); // Corrigido para setId_users
        user.setName_users(usersAtualizado.getName_users()); // Corrigido para setName_users
        user.setTel_users(usersAtualizado.getTel_users()); // Corrigido para setEmail_users       
        user.setSenha(usersAtualizado.getSenha()); // Corrigido para setEmail_users

        Usuario usersAtualizadoBD = usersRepository.save(user);
        return ResponseEntity.ok(usersAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
